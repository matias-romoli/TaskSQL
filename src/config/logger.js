import log4js from "log4js";

log4js.configure({
  appenders: {
    console: { type: "console" },
    errorFile: { type: "file", filename: "./src/utils/log/error.log" },

    loggerConsole: {
      type: "logLevelFilter",
      appender: "console",
      level: "info",
    },
    loggerError: {
      type: "logLevelFilter",
      appender: "errorFile",
      level: "error",
    },
  },
  categories: {
    default: {
      appenders: ["loggerConsole", "loggerError"],
      level: "all",
    },
  },
});

export const logger = log4js.getLogger();
