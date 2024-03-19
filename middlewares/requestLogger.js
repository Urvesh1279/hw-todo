const chalk = require("chalk");

module.exports.requestLogger = (req, res, next) => {
  console.log(chalk.yellow(`[+] Incoming Request ${req.originalUrl}`));
  next();
};
