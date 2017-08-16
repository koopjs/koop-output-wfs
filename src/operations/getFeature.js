const Winnow = require('winnow')

module.exports = function (data, options) {
  const filtered = Winnow.query(data, options)
  const srs = options.srsName || options.srsname
  const crs = srs ? `urn:ogc:def:crs:${srs.replace(':', '::')}` : 'urn:ogc:def:crs:EPGS::4236'
  filtered.crs = {type: 'name', properties: {name: crs}}
  filtered.totalFeatures = filtered.features.length
  return filtered
}
