var we = require('./index.js')
// simulate LA plugin loading
function test () {
  var EE = require('events').EventEmitter
  // Logagent loads the configfrom a yaml file
  // we simply pass a JSON object
  var config = {
          interval: 10,
          providers: ['TestApp2'],
          maxEvents: 1000,
          debug: true
  }
  // create and start the plugin - normally done by logagent ...
  var plugin = new we(config, new EE())
  plugin.start()
}

if (require.main === module) {
  test()
}