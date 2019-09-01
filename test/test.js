const { cs } = require('../wrapper.js')

;(async() => {
    const b = new cs('http://localhost:8000', 'password')

    let then = Date.now()

    let a = await b.test()

    console.log(a, Date.now() - then)

    a = await b.set('asd', JSON.stringify({a: 1, b:1}))

    console.log(a, Date.now() - then)

    a = await b.get('asd')

    console.log(a, Date.now() - then)

    a = await b.del('asd')

    console.log(a, Date.now() - then)
})()