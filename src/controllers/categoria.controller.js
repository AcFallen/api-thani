import {conexion} from '../conectores.js'
import {crearCategoriaDto , eliminarCategoriaDto} from '../dto/categoria.dto.js'


export async function crearCategoria(req, res) {
    
    const validacion = crearCategoriaDto.validate(req.body);

    if(validacion.error){
        return res.status(400).json({
            content: validacion.error.details[0].message
        })
    }

    const categoriaCreada = await conexion.categoria.create({ data: validacion.value });

    return res.status(201).json({
        message: "Categoria creada exitosamente",
        content: categoriaCreada
    });

}

export async function listarCategorias(req, res) {
    const categorias = await conexion.categoria.findMany();
    return res.json({
        content: categorias
    });
}

export async function eliminarCategoria(req, res) {
    const validacion = eliminarCategoriaDto.validate(req.params);

    if(validacion.error){
        return res.status(400).json({
            content: validacion.error.details[0].message
        })
    }

    const categoriaEliminada = await conexion.categoria.delete({
        where: {
            id: Number(validacion.value.id)
        }
    });

    return res.status(204).json({
        message: "Categoria eliminada exitosamente",
        content: categoriaEliminada
    });
}