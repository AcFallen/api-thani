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
        content: nuevoUsuario
    })
}

export const login = async (req,res)=>{
    const validacion = loginUsuario.validate(req.body)

    if(validacion.error){
        return res.status(400).json({
            error: validacion.error.details[0].message
        })
    }

    const { correo , password } = validacion.value

    const usuarioEncontrado = await conexion.usuario.findUniqueOrThrow({
        where:{
            correo
        }
    })

    const passwordValido = await bcryptjs.compare(password,usuarioEncontrado.password)

    if(passwordValido){
        const token = jwt.sign({
            id: usuarioEncontrado.id,
            correo: usuarioEncontrado.correo,
            tipo: usuarioEncontrado.tipoUsuario
        },process.env.JWT_SECRET_KEY,{
            expiresIn: '8h'
        })

        return res.status(200).json({
            mensaje: 'Usuario logueado',
            content: token
        })
    }else{
        return res.status(400).json({
            error: 'Usuario o contraseña incorrectos'
        })
    }

}