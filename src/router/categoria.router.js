import {Router} from 'express'
import AsyncHandler from 'express-async-handler'
import {crearCategoria,eliminarCategoria , listarCategorias} from '../controllers/categoria.controller.js'
import {validarToken, validarAdmin} from '../validarToken.js'

export const categoriaRouter = Router();

categoriaRouter.post('/crear-categoria',AsyncHandler(crearCategoria));
categoriaRouter.get('/listar-categorias', validarToken, validarAdmin, AsyncHandler(listarCategorias));
categoriaRouter.delete('/eliminar-categoria/:id',AsyncHandler(eliminarCategoria));

