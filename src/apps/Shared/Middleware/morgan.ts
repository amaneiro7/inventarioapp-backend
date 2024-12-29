import morgan from "morgan"
import fs from "node:fs"
import path from "node:path"

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

export const morganLog = morgan('combined', { stream: accessLogStream })