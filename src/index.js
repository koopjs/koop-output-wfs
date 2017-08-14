const router = require('./router')

class WFS {
  serveWFS (req, res) {
    this.model.pull(req, (e, data) => {
      if (e) res.status(e.code || 500).json({ error: e.message })
      else router.route(res, res, data)
    })
  }
}

WFS.version = require('../package.json').version
WFS.type = 'output'
WFS.routes = [
  {
    path: 'wfs',
    methods: ['get', 'post'],
    handler: 'serveWFS'
  }
]

module.exports = WFS
