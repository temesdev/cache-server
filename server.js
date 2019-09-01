const server = require('fastify')({
    logger: false
})

const argv = require('larg')(process.argv.slice(2))
const _cache = new Map()

const authkey = argv.k || ''
const port = argv.p || 8000
const debug = argv.d

server.get('/', async (req, rep) => {
    return { hello: 'world' }
})

server.post('/set/:value', async (req, rep) => {
    if (req.headers.authorization !== authkey)
        return rep.code(403).send('403 Unauthorized')
    _cache.set(req.params.value, req.headers.content)
    if (debug)
        console.log(_cache)
    return { status: "ok" }
})

server.get('/get/:value', async (req, rep) => {
    if (req.headers.authorization !== authkey)
        return rep.code(403).send('403 Unauthorized')
    return _cache.get(req.params.value)
})

server.delete('/del/:value', async (req, rep) => {
    if (req.headers.authorization !== authkey)
        return rep.code(403).send('403 Unauthorized')
    _cache.delete(req.params.value)
    if (debug)
        console.log(_cache);
    return { status: "ok" }
})

server.listen(port, (err, address) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    server.log.info(`server listening on ${address}`)
})