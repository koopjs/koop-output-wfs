const router = require('./router')

function WFS () {}

WFS.prototype.serve = function (req, res) {
  this.model.pull(req, (e, data) => {
    if (e) res.status(e.code || 500).json({ error: e.message })
    else router.route(req, res, data)
  })
}

WFS.version = require('../package.json').version
WFS.type = 'output'
WFS.routes = [
  {
    path: 'wfs',
    methods: ['get', 'post'],
    handler: 'serve'
  }
]

module.exports = WFS
