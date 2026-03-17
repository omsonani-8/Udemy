import winston, { Logger } from "winston";

const logger: Logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({level:"info" ,filename:'logs/info.log'}),
    new winston.transports.File({level:"error" ,filename:'logs/error.log'})
  ]
},
);

export default logger;
