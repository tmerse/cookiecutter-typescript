import * as winston_daily_rotate from "winston-daily-rotate-file";
import * as winston from "winston";

const logger = new winston.Logger({
  //  level: 'info',
  level: "verbose",
  transports: [
    // transport flags:
    // https://github.com/winstonjs/winston/blob/master/docs/transports.md#console-transport
    // new (winston.transports.Console)({json: true, prettyPrint: true, stringify: true}),
    new winston.transports.Console({
      json: true,
      level: "verbose"
    }),
    //  new (winston.transports.File)({ filename: 'logs/trackntrace.log' })
    //  new (require('winston-daily-rotate-file'))(
    new winston_daily_rotate({
      // prepend date in front of filename
      // prepend: true,
      filename: "logs/verbose.log",
      name: "all",
      level: "verbose",
      json: true
    }),
    new winston_daily_rotate({
      filename: "logs/error.log",
      name: "error",
      level: "error",
      json: true
    })
  ]
});

export { logger };
