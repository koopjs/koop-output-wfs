const Koop = require('koop')
const koop = new Koop()

const googleSheets = require('@koopjs/provider-google-sheets')
const wfs = require('../src')

koop.register(googleSheets)
koop.register(wfs)

koop.server.listen(1237)
