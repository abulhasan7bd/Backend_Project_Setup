/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
const winston = require('winston')
const path = require('path')
var DailyRotateFile = require('winston-daily-rotate-file')

const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

const successLogger = winston.createLogger({
  level: 'info',
  format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      filename: 'application-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      // eslint-disable-next-line no-dupe-keys
      filename: path.join(
        process.cwd(),
        'logs',
        'success',
        'application-%DATE%.log',
      ),
      zippedArchive: true,
      maxSize: '1k',
      maxFiles: '14d',
    }),
  ],
})

const errotLogger = winston.createLogger({
  level: 'error',
  format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      filename: 'application-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      // eslint-disable-next-line no-dupe-keys
      filename: path.join(
        process.cwd(),
        'logs',
        'errors',
        'application-%DATE%.log',
      ),
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

// eslint-disable-next-line no-undef
module.exports = { successLogger, errotLogger }
