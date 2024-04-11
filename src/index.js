import express from 'express'
import * as Rutas from './router/index.js'

const app = express()

app.use(express.json())


app.use(Rutas.usuarioRouter)

app.listen(3000)

console.log('Server listen on port',3000)