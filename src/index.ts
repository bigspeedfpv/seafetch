import "./specs"
import { getDistro, getKernel, getUptime, getWMDE } from "./specs"
import { getArt } from "./art"

const distro: string = getDistro()

const art: string = getArt(distro)

const info = [
    "",
    getDistro(),
    getKernel(),
    getWMDE(),
    getUptime(),
    getDistro(),
    getDistro(),
    getDistro(),
    getDistro(),
    getDistro(),
    getDistro(),
    getDistro(),
    getDistro(),
    getDistro(),
    getDistro(),
]

const artLines: string[] = art.split("\n")

const longestLine = Math.max(...(artLines.map(el => el.length)));
const sep = " ".repeat(longestLine - 9)

for (const i in (artLines.length > info.length ? artLines : info)) {
    let artLine = artLines[i] || sep
    let infoLine = info[i] || ""
    let line = artLine + "\x1b[37m\t" + infoLine
    console.log(line)
}