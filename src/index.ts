#!/usr/bin/env node

import "./specs"
import { getCPU, getDisk, getDistro, getGPU, getKernel, getName, getPackages, getRAM, getResolution, getTheme, getUptime, getWMDE } from "./specs"
import { getArt } from "./art"

const distro: string = getDistro()

const art: string = getArt(distro)

const theme: string[] = getTheme()

const info = [
    getName(),
    "-".repeat(getName().length - 20),
    getDistro(),
    getKernel(),
    getUptime(),
    getPackages(),
    "",
    getWMDE(),
    getResolution(),
    "",
    getCPU(),
    getRAM(),
    getGPU(),
    getDisk()
]

console.log("") // newline

const artLines: string[] = art.split("\n")

const longestLine = Math.max(...(artLines.map(el => el.length)));
const sep = " ".repeat(longestLine - 9)

for (const i in (artLines.length > info.length ? artLines : info)) {
    let artLine = artLines[i] || sep
    let infoLine = info[i] || ""
    let line = artLine + "\x1b[37m\t" + infoLine
    console.log(line)
}

console.log("") // newline
