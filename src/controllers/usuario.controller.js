import {conexion} from '../conectores.js'
import {registroUsuario,loginUsuario} from '../dto/usuario.dto.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const registro = async (req,res)=>{
    const validacion = registroUsuario.validate(req.body)

    if(validacion.error){
        return res.status(400).json({
            error: validacion.error.details[0].message
        })
    }

    const salt = await bcryptjs.genSalt(10)

    const passwordHashed = await bcryptjs.hash(validacion.value.password,salt)

    const nuevoUsuario = await conexion.usuario.create({
        data:{
            ...validacion.value, password: passwordHashed
        }
    })

    return res.status(201).json({
        mensaje: 'Usuario registrado',
        usuario: nuevoUsuario
    })
}