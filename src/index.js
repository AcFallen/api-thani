import express from 'express'
import cors from 'cors'
import * as Rutas from './router/index.js'

const app = express()

app.use(cors())

app.use(express.json())



app.use(Rutas.usuarioRouter)
app.use(Rutas.categoriaRouter)
app.use(Rutas.productoRouter)

app.listen(3000)

console.log('Server listen on port',3000)