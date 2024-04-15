import { Router } from "express";
import AsyncHandler from "express-async-handler";

import {
  crearProducto,
  eliminarProducto,
  listarProductos,
  actualizarProducto,
  listarUnProducto,
  eliminarDetalleProducto,
} from "../controllers/producto.controller.js";

import { validarToken, validarAdmin } from "../validarToken.js";

export const productoRouter = Router();

productoRouter.post(
  "/crear-producto",
  validarToken,
  validarAdmin,
  AsyncHandler(crearProducto)
);
productoRouter.delete(
  "/eliminar-producto/:id",
  validarToken,
  validarAdmin,
  AsyncHandler(eliminarProducto)
);
productoRouter.put(
  "/actualizar-producto/:id",
  validarToken,
  validarAdmin,
  AsyncHandler(actualizarProducto)
);

productoRouter.get("/listar-un-producto/:id", AsyncHandler(listarUnProducto));
productoRouter.get("/listar-productos", AsyncHandler(listarProductos));

productoRouter.delete(
  "/eliminar-detalle-producto/:id/:productoId",
  validarToken,
  validarAdmin,
  AsyncHandler(eliminarDetalleProducto)
);
