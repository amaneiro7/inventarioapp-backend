import morgan from 'morgan'
import fs from 'node:fs'
import path from 'node:path'

// Construir la ruta absoluta a la carpeta logs en la raíz del proyecto
const logDirectory = path.resolve(process.cwd(), 'logs')

// Asegurarse de que la carpeta logs existe, de lo contrario, crearla
if (!fs.existsSync(logDirectory)) {
	fs.mkdirSync(logDirectory, { recursive: true })
}

const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' })

export const morganLog = morgan('combined', { stream: accessLogStream })
