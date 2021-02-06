import fs from "fs"
import execa from "execa"
import { exec } from "child_process"

const magenta: string = "\x1b[1m\x1b[31m"
const white: string = "\x1b[37m"
const blue: string = "\x1b[34m"

export const getDistro = (): string => {
    var lines = fs.readFileSync("/etc/os-release", "utf-8")
        .split("\n")
        .filter((value: string) => { return value.includes("PRETTY_NAME") })
    return `${magenta}OS: ${white}${lines[0].slice(13, -1)}`
}

export const getKernel = (): string => {
    const kernel = execa.sync("uname", ["-r"])
    return `${magenta}Kernel: ${white}${kernel.stdout}`
}

export const getWMDE = (): string => {
    let de: string = process.env.XDG_DESKTOP_SESSION || process.env.XDG_CURRENT_DESKTOP || process.env.XDG_DESKTOP_SESSION || "Unable to find WM/DE."
    return `${magenta}WM/DE: ${white}${de}`
}

export const getUptime = (): string => {
    let prettyUptime: string = "Unable to find uptime."
    let uptime = fs.readFileSync("/proc/uptime", "utf-8")
    if (uptime) {
        let total = parseInt(uptime.split(".")[0])
        let days = Math.floor(total / (24 * 3600))
        total -= days * (24 * 3600)
        let hours = Math.floor((total % (24 * 3600)) / 3600)
        total -= hours * 3600
        let mins = Math.floor(total / 60)
        prettyUptime = `${days != 0 ? `${days} day${days != 1 ? `s` : ``}, ` : ``}${hours != 0 ? `${hours} hour${hours != 1 ? `s` : ``}, ` : ``}${mins} minutes`
    }
    return `${magenta}Uptime: ${white}${prettyUptime}`
}

export const getPackages = (): string => {
    const distro = getDistro()
    let packages = ``
    try {
        if (distro.includes("Arch") || distro.includes("Manjaro")) {
            let pacOut = execa.sync("pacman", ["-Q"]).stdout
            packages = `${execa.sync("wc", ["-l"], { input: pacOut }).stdout} - pacman`
        } else if (distro.includes("Debian") || distro.includes("Ubuntu") || distro.includes("Pop!") || distro.includes("Mint")) {
            let aptOut = execa.sync("dpkg", ["-l"]).stdout
            packages = `${execa.sync("wc", ["-l"], { input: aptOut }).stdout} - dpkg`
        } else if (distro.includes("Void")) {
            let xbpsOut = execa.sync("xbps-query", ["-l"]).stdout
            packages = `${execa.sync("wc", ["-l"], { input: xbpsOut }).stdout} - xbps`
        }
    } catch(error) {
        packages = `Unable to get packages.`
    }
    return `${magenta}Packages: ${white}${packages}`
}

export const getName = (): string => {
    let user = execa.sync("id", ["-un"]).stdout
    let hostname = execa.sync("hostname", ["-f"]).stdout
    return `${magenta}Hello, ${blue}${user}${white}@${blue}${hostname}`
}

export const getTheme = (): string[] => {
    let theme: string = ``
    let icons: string = ``
    let font: string = ``
    let cursor: string = ``
    
    for (var line of fs.readFileSync(`${process.env.HOME}/.config/gtk-3.0/settings.ini`, `utf-8`).split(`\n`)) {
        let i = line.split("=")
        
        if (i.length != 2) continue
        let key = i[0]
        let val = i[1]
        if (key === "gtk-theme-name") theme = `${magenta}Theme: ${white}${val}`
        if (key === "gtk-icon-theme-name") icons = `${magenta}Icons: ${white}${val}`
        if (key === "gtk-font-name") font = `${magenta}Font: ${white}${val.split(`,`)[0]}`
        if (key === "gtk-cursor-theme-name") cursor = `${magenta}Cursor: ${white}${val}`
    }

    return [theme, icons, font, cursor]
}

export const getResolution = (): string => {
    let res: string = execa.commandSync(`xrandr --nograb --current | awk 'match($0,/[0-9]*\\.[0-9]*\\*/) { printf $1 ", " }'`, { shell: true }).stdout.slice(0, -2)
    return `${magenta}Display: ${white}${res}`
}

export const getGPU = (): string => {
    let gpu: string = execa.commandSync(`lspci -mm | grep VGA`, { shell: true }).stdout.split(`"`)[5]
    return `${magenta}GPU: ${white}${gpu}`
}

export const getCPU = (): string => {
    let cpuinfo = fs.readFileSync(`/proc/cpuinfo`, `utf-8`)
    let model = cpuinfo.split("\n").filter(i => i.includes(`model name`))[0].split(`:`)[1].trim()
    return `${magenta}CPU: ${white}${model}`
}

export const getRAM = (): string => {
    let meminfo = fs.readFileSync(`/proc/meminfo`, `utf-8`)
    let totalMem = 0.0
    let usedMem = 0.0
    
    meminfo.split(`\n`).map(i => {
        let line = i.split(`:`).map(el => el.trim())

        if (line.length == 2) {
            let key = line[0]
            let val = parseInt(line[1].replace(` kB`, ``))
            console.log(key, val)
        
            if (key === `MemTotal`) { totalMem = val; usedMem += val }
            else if (key === `Shmem`) { usedMem += val }
            else if (key === `SReclaimable` || key === `Buffers` || key === `Cached` || key === `MemFree`) { usedMem -= val }
        }
    })
    return `${magenta}RAM: ${white}${(usedMem / 1024 / 1000).toFixed(1)}GB Used / ${(totalMem / 1024 / 1000).toFixed(1)}GB Total`
}