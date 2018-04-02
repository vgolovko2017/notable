
class Logger {
    constructor(module, pathToLog) {
        this.moduleFileName = module.filename;
        if (pathToLog)
            this.pathTolog = pathToLog;
        else
            this.pathTolog = '/home/vgolovko/Desktop/notable/logs/';
        this.fs = require('fs');
    }

    info(msg) {
        console.log(this.moduleFileName + ": " + msg);
        this.fs.appendFileSync(this.pathTolog + 'info.log', this.moduleFileName + ": " + msg + "\n", (err) => {
            if (err)
                throw err;
        });
    }

    error(msg) {
        console.log(this.moduleFileName + ": " + msg);
        this.fs.appendFileSync(this.pathTolog + 'error.log', this.moduleFileName + ": " + msg + "\n", (err) => {
            if (err)
                throw err;
        });
    }
}

module.exports = Logger;