const express = require('express')
require('dotenv').config()

const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const PC = require('./db/products_controller')

app.use(express.json())

massive(CONNECTION_STRING).then((db)=> {
    app.set('db', db)
    console.log('DB set')
    console.log(db.listTables())
    })
    .catch(err => console.log(err))


    app.get('/api/products', PC.getAll)
    app.get('/api/products/:id', PC.getOne)
    app.post('/api/products', PC.create)
    app.put('/api/products/:id', PC.update)
    app.delete('/api/products/:id', PC.delete)











app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))