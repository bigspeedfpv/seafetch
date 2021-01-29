import fs from "fs"

export const getDistro = (): string => {
    var lines = fs.readFileSync("/etc/os-release", "utf-8")
        .split("\n")
        .filter((value: string) => { return value.includes("PRETTY_NAME") })
    return lines[0].slice(13, -1)
} 