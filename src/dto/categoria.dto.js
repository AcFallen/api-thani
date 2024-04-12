import Joi from 'joi'

export const crearCategoriaDto = Joi.object({
    nombre: Joi.string().required()
});

export const eliminarCategoriaDto = Joi.object({
    id: Joi.number().required()
});

