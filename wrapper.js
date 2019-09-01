const w = require('wumpfetch')

class cs {
    constructor(host, auth) {
        this.auth = auth
        this.host = host

        this.test = async function () {
            const a = await w(`${this.host}/`, { method: 'GET' }).send()

            return a.parse()
        }

        this.set = async function (key, value) {
            const a = await w(`${this.host}/set/${key}`, { method: 'POST' })
                .header({ 'content': value })
                .header({ 'Authorization': this.auth })
                .send();

            return a.parse()
        }

        this.get = async function (key) {
            const a = await w(`${this.host}/get/${key}`, { method: 'GET' })
                .header({ 'Authorization': 'password' })
                .send()

            return a.parse()
        }

        this.del = async function (key) {
            const a = await w(`${this.host}/del/${key}`, { method: 'DELETE' })
                .header({ 'Authorization': 'password' })
                .send()

            return a.parse()
        }
    }
}

module.exports.cs = cs
