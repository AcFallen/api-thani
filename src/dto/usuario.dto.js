import { TipoUsuario } from "@prisma/client";
import Joi from "joi";


export const registroUsuario = Joi.object({
    nombre: Joi.string().required(),
    correo: Joi.string().email().required(),
    password: Joi.string().required(),
    tipoUsuario: Joi.string().valid(...Object.values(TipoUsuario)).required(),
});


export const loginUsuario = Joi.object({
    correo: Joi.string().email().required(),
    password: Joi.string().required(),
});