const Winnow = require('winnow')

module.exports = function (data, options) {
  const filtered = Winnow.query(data, options)
  filtered.crs = {type: 'name', properties: {name: 'urn:ogc:def:crs:EPSG::3857'}}
  filtered.totalFeatures = filtered.features.length
  return filtered
}
