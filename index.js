const { send } = require('micro')
const { router, get } = require('micro-fork')

const index = async (req, res) =>
    send(res, 200, await Promise.resolve('Micro on LeanEngine'))
const notFound = async (req, res) =>
    send(res, 404, await Promise.resolve('Not Found'))

module.exports = router()(
    get('/', index),
    get('/*', notFound)
)