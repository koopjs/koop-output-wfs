const Koop = require('koop')
const koop = new Koop()

const googleSheets = require('@koopjs/provider-google-sheets')
const craigslist = require('koop-provider-craigslist')
const wfs = require('../src')

koop.register(wfs)
koop.register(googleSheets)
koop.register(craigslist)

const config = require('config')
const port = config.port || 8082
koop.server.listen(port)
console.log(`port=${port}`)
