const { cs } = require('../wrapper.js')

;(async() => {
    const b = new cs('http://localhost:8000', 'password')

    let then = Date.now()

    let a = await b.set('asd', JSON.stringify({a: 1, b:1}))

    console.log(a, Date.now() - then)

    then = Date.now()

    a = await b.get('asd')

    console.log(a, Date.now() - then)

    then = Date.now()
    
    a = await b.del('asd')

    console.log(a, Date.now() - then)
})()