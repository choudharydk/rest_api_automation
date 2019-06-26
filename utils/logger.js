var log4js = require( "log4js" );
//var log = require("../utils/logger")
//log4js.configure(log.logging());
//var logger = log4js.getLogger();

var logging = () => {

    return {
        appenders: {
            access: { type: 'dateFile', filename: 'logs/access.log', pattern: '-yyyy-MM-dd' },
            info: { type: 'file', filename: 'logs/info.log', maxLogSize: 10485760, numBackups: 3 },
            errorFile: { type: 'file', filename: 'logs/errors.log' },
            errors: { type: 'logLevelFilter', level: 'error', appender: 'errorFile' }
        },
        categories: {
            default: { appenders: ['info', 'errors'], level: 'info' },
            http: { appenders: ['access'], level: 'info' }
        }
    }
}

module.exports = {
    logging
}

