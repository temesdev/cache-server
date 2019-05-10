const { cs } = require('../wrapper.js')

;(async() => {
    const b = new cs('http://localhost:8000', 'password')

    b.set('asd', JSON.stringify({a: 1, b:1})).then(a => {
        console.log(a)
    })

    b.get('asd').then(a => {
        console.log(a)
    })

    b.del('asd').then(a => {
        console.log(a)
    })
})()