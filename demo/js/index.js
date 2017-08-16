/* global ol */
var vectorSource = new ol.source.Vector({
  format: new ol.format.GeoJSON(),
  url: function (extent) {
    return 'http://localhost:8082/craigslist/washingtondc/apartments/wfs?service=WFS&' +
        'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
        'outputFormat=application/json&srsname=EPSG:3857&' +
        'bbox=' + extent.join(',') + ',EPSG:3857'
  },
  strategy: ol.loadingstrategy.bbox
})

var image = new ol.style.Circle({
  radius: 5,
  fill: null,
  stroke: new ol.style.Stroke({ color: 'red', width: 1 })
})

var vector = new ol.layer.Vector({
  source: vectorSource,
  style: new ol.style.Style({
    image: image
  })
})

var raster = new ol.layer.Tile({
  source: new ol.source.BingMaps({
    imagerySet: 'Road',
    key: 'Ausmuw4z9K_f3g27HhutYC9EWYpgn6c4B6ezFCaspl7hUrufrgf1EQFQLZjLDGoI'
  })
})
window.ol = ol
window.map = new ol.Map({
  layers: [raster, vector],
  target: document.getElementById('map'),
  view: new ol.View({
    center: [-8571773.766191712, 4708714.598260965],
    maxZoom: 19,
    zoom: 10
  })
})
