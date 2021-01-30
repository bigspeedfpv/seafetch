import fs from "fs"
import execa from "execa"

const magenta: string = "\x1b[35m"
const white: string = "\x1b[37m"

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