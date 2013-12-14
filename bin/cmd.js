#!/usr/bin/env node

var hr = require('../')
  , optimist = require('optimist')
  , path = require('path')
  , fs = require('fs')

argv = optimist.argv

if (argv.v || argv.version) {
  console.log(require('../package.json').version)
  return
}

if (argv.h || argv.help) {
  fs.createReadStream(path.resolve(__dirname, 'usage.txt'))
    .pipe(process.stdout)
  return
}

var port = argv.port || argv.p
  , host = argv.host

var server = hr(
    { permament: argv.permament || argv['1']
    }
  )

server.listen(port, host)
