import { Router} from 'express'
import { registro , login } from '../controllers/usuario.controller.js'
import expressAsyncHandler from 'express-async-handler'
import { validarToken , validarAdmin } from '../validarToken.js'

export const usuarioRouter = Router()

usuarioRouter.post('/registro', validarToken, validarAdmin , expressAsyncHandler(registro))

usuarioRouter.post('/login',expressAsyncHandler(login))