const operations = require('./operations')

function route (req, res, data) {
  const options = parseOptions(req.query)
  const operation = operations[options.request]
  if (!operation) return res.status(400).json({ error: 'Request not supported' })

  try {
    const response = operation(data, options)
    return res.status(200).json(response)
  } catch (e) {
    return res.status(e.code || 500).json({ error: e.message })
  }
}

function parseOptions (query) {
  return Object.keys(query).reduce((options, key) => {
    options[key] = tryParse(query[key])
    return options
  }, {})
}

function tryParse (key) {
  try {
    return JSON.parse(key)
  } catch (e) {
    return key
  }
}

module.exports = { route }
