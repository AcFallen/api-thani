import Joi from "joi";

export const crearProductoDto = Joi.object({
    nombre: Joi.string().required(),
    propiedades: Joi.string().required(),
    beneficios: Joi.string().required(),
    modoDeUso: Joi.string().required(),
    imagen: Joi.string().optional(),
    categoriaId: Joi.number().required(),

    detalles : Joi.array().items(Joi.object({
        unidadDeMedida: Joi.string().required(),
        precio: Joi.number().precision(2).required(),
        }))
});

export const eliminarProductoDto = Joi.object({
    id: Joi.number().required()
});

export const actualizarProductoDto = Joi.object({

    nombre: Joi.string().optional(),
    propiedades: Joi.string().optional(),
    beneficios: Joi.string().optional(),
    modoDeUso: Joi.string().optional(),
    imagen: Joi.string().optional(),
    categoriaId: Joi.number().optional(),

    detalles : Joi.array().items(Joi.object({
        unidadDeMedida: Joi.string().required(),
        precio: Joi.number().precision(2).required(),
        id: Joi.number().optional()}))
});

export const eliminarDetalleProductoDto = Joi.object({
    id: Joi.number().required(),
    productoId: Joi.number().required()
});
