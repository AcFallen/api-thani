import { Router } from "express";
import AsyncHandler from "express-async-handler";

import { crearProducto, eliminarProducto, listarProductos, actualizarProducto , listarUnProducto } from "../controllers/producto.controller.js";

export const productoRouter = Router();

productoRouter.post("/crear-producto", AsyncHandler(crearProducto));
productoRouter.get("/listar-productos", AsyncHandler(listarProductos));
productoRouter.delete("/eliminar-producto/:id", AsyncHandler(eliminarProducto));
productoRouter.put("/actualizar-producto/:id", AsyncHandler(actualizarProducto));
productoRouter.get("/listar-un-producto/:id", AsyncHandler(listarUnProducto));