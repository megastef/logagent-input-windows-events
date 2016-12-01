'use strict'
var WinEventEmitter = require('win-getevent').WinEventEmitter;

/**
 * Constructor called by logagent, when the config file contains tis entry: 
 * input
 *  win-event:
 *    module: logagent-input-win-event
 *    intervall: 10
 *    providers: 
 *      - TestApp2
 *      - Microsoft-Windows-DNS-Client
 *
 * @config cli arguments and config.configFile entries
 * @eventEmitter logent eventEmitter object
 */
function InputWinEvent (config, eventEmitter) {
  this.config = config
  this.eventEmitter = eventEmitter
}

/**
 * Plugin start function, called after constructor
 *
 */
InputWinEvent.prototype.start = function () {
  if (!this.started) {
    var self = this
    self.winEmitter = new WinEventEmitter({
     providers: ['TestApp2'],//Microsoft-Windows-LoadPerf', 'McAfee Service Controller', 'Microsoft-Windows-DNS-Client', 'Microsoft-Windows-Kernel-General', 'HPSupportSolutionsFrameworkService '], //['MMicrosoft-Windows-GroupPolicy'],
     frequency: (this.config.interval||10) * 1000,
     maxEvents: (this.config.maxEvents||1000) 
    })
    var context = {source: 'windowsEvent'}
    self.winEmitter.on('data', logs => {
        // Contains an array of log objects 
        logs.forEach(log => {
            log['@timestamp'] = log.timeCreated
            self.eventEmitter.emit('data.raw', JSON.stringify(log), context)
            if (self.config.debug) {
                console.log(JSON.stringify(log))
            }
        })
    })
    self.winEmitter.on('error', err => {
        console.log(`Error: ${err}`);
    })
    // Start polling 
    self.winEmitter.start()
    self.started = true
  }
}

/**
 * Plugin stop function, called when logagent terminates
 * we close the server socket here.
 */
InputWinEvent.prototype.stop = function (cb) {
  this.winEmitter.stop()
}

module.exports = InputWinEvent