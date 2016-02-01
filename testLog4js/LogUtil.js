/**
 * Created by jianwu.zhang on 2016/02/01.
 */
var log4js = require('log4js');
var DevLogger = log4js.getLogger("Dev");
DevLogger.setLevel(log4js.levels.INFO); // you can also get it from propertis.
DevLogger.addAppender(new ConsoleAppender(true);





log4js.configure({
    appenders:[
        {
            type:"console"
        },
        {
            type:"dateFile",
            filename: 'logs/access.log',
            pattern: "-yyyy-MM-dd.log",
            maxLogSize: 1024,
            alwaysIncludePattern: false
        }
    ],
    replaceConsole: true
});
//log4js.setGlobalLogLevel(log4js.levels.ERROR);

exports.logger=function(name){
    var logger = log4js.getLogger(name);
    logger.setLevel('INFO');
    return logger;
};
//exports.setLogLevel = function(level){
//    log4js.setGlobalLogLevel(level || log4js.levels.DEBUG);
//};
//exports.getLogger = function(file){
//    return log4js.getLogger(file || "dateFileLog");
//};



