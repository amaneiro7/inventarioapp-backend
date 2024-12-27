import { createLogger, transports, format } from 'winston'

export const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'logs.log' }),
  ]
})

async function executeError() {
  try {
    throw new Error("Oops")

  } catch (error) {
    if (error instanceof Error) {
      logger.error({
        message: error.message,
        name: error.name,
        stack: error.stack,
      })
    } else {
      logger.error({
        message: 'Unknown error ocurred'
      })
    }
  }
}

executeError()