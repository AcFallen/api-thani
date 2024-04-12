import {Router} from 'express'
import AsyncHandler from 'express-async-handler'
import {crearCategoria,eliminarCategoria , listarCategorias} from '../controllers/categoria.controller.js'

export const categoriaRouter = Router();

categoriaRouter.post('/crear-categoria',AsyncHandler(crearCategoria));
categoriaRouter.get('/listar-categorias',AsyncHandler(listarCategorias));
categoriaRouter.delete('/eliminar-categoria/:id',AsyncHandler(eliminarCategoria));

