
var http = require('http')
  , bunyan = require('bunyan')

module.exports = function (options) {

  options = options || {}
  var statusCode = options.permament ? 301 : 302

  var logger = bunyan.createLogger(
          { name: options.name || 'https-redirect'
          , serializers: bunyan.stdSerializers
          }
        )

  var server = http.createServer(function (req, res) {
    logger.info({ req: req })

    if (!req.headers.host) {
      res.statusCode = 400
      res.end()
      return
    }

    var location = 'https://' + req.headers.host.split(':')[0] + req.url

    res.statusCode = statusCode
    res.setHeader('Connection', 'close')
    res.setHeader('Content-Length', '0')
    res.setHeader('Location', location)
    res.end()
  })

  server.on('listening', function () {
    logger.info(this.address(), 'listening')
  })

  return server
}
