const express = require('express');
const app = express();

const argv = require('larg')(process.argv.slice(2))
const _cache = new Map();

const authkey = argv.k ? argv.k : ''
const port = argv.p ? argv.p : 8000;
const debug = argv.d

app.get('/', (req, res) => {
    res.send(JSON.stringify({ status: "online", message: "Cache server online" }));
});

app.post('/set/:value', (req, res) => {
    if (req.get('Authorization') !== authkey) 
        return res.sendStatus(403).end();
    _cache.set(req.params.value, req.get('content'));
    if (debug)
        console.log(_cache);
    res.json({ status: "ok" });
});

app.get('/get/:value', (req, res) => {
    if (req.get('Authorization') !== authkey)
        return res.sendStatus(403).end();
    res.send(_cache.get(req.params.value));
});

app.delete('/del/:value', (req, res) => {
    if (req.get('Authorization') !== authkey)
        return res.sendStatus(403).end();
    _cache.delete(req.params.value);
    if (debug)
        console.log(_cache);
    res.json({ status: "ok" });
});

app.listen(port, _ => {
    if (authkey.length < 1 || authkey === true) {
        console.error(`No authorization key specified. Use the launch option "-k" followed by the key to set it.`);
        process.exit();
    }
    console.log(`Cache server online. Listening on port ${port}`);
});