const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT 

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use ('/api/tareas',require ('./routes/tareasRoutes'))

app.listen(port, ()=> console.log (`servidor iniciado en el puerto ${port}`))