const router = require('./router')

class WFS () {
  static version: require('./package.json').version
  static type: 'output'
  static routes: [
    {
      path: 'wfs',
      methods: ['get', 'post'],
      handler: 'wfs'
    }
  ]

  wfs () {
    this.model.pull(req, (e, data) => {
      if (e) res.status(e.code || 500).json({ error: e.message })
      else router.route(res, res, data)
    })
  }
}
