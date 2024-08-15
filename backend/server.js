const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT 
const colors = require ('colors')
const connectBD = require ('../config/db')
const app = express()

connectBD()

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use ('/api/tareas',require ('./routes/tareasRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log (`servidor iniciado en el puerto ${port}`))