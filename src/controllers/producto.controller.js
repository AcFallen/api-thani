import { conexion } from "../conectores.js";
import { crearProductoDto, eliminarProductoDto } from "../dto/producto.dto.js";

export async function crearProducto(req, res) {
  const validacion = crearProductoDto.validate(req.body);

  if (validacion.error) {
    return res.status(400).json({
      content: validacion.error.details[0].message,
    });
  }

  await conexion.$transaction(async (cursor) => {
    const { detalles, ...producto } = validacion.value;

    

    const productoCreado = await cursor.producto.create({
      data: producto,
      select: {
        id: true,
      },
    });

    await cursor.detalleProducto.createMany({
      data: detalles.map((detalle) => ({
        ...detalle,
        productoId: productoCreado.id,
      })),
    });
  });

  return res.status(201).json({
    message: "Producto creado exitosamente",

  });
}

export async function eliminarProducto(req, res) {
  const validacion = eliminarProductoDto.validate(req.params);

  if (validacion.error) {
    return res.status(400).json({
      content: validacion.error.details[0].message,
    });
  }

  const productoEliminado = await conexion.producto.delete({
    where: {
      id: Number(validacion.value.id),
    },
  });

  return res.status(204).json({
    message: "Producto eliminado exitosamente",
    content: productoEliminado,
  });
}

export async function actualizarProducto(req, res) {
  const { id } = req.params;
  const validacion = actualizarProductoDto.validate(req.body);

  if (validacion.error) {
    return res.status(400).json({
      content: validacion.error.details[0].message,
    });
  }

  const productoActualizado = await conexion.producto.update({
    where: {
      id: Number(id),
    },
    data: validacion.value,
  });

  return res.status(200).json({
    message: "Producto actualizado exitosamente",
    content: productoActualizado,
  });
}

export async function listarUnProducto(req, res) {
  const { id } = req.params;
  const producto = await conexion.producto.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      detalles: true,
      categoria: true
    }
  });

  if (!producto) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  return res.status(200).json({
    content: producto,
  });
}

export async function listarProductos(req, res) {
    const productos = await conexion.producto.findMany({
        include: {
            detalles: true,
            categoria: true
        }
    });
    
    return res.status(200).json({
        content: productos,
    });
    }
