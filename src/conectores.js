import {PrismaClient} from '@prisma/client'

export const conexion = new PrismaClient({
    datasources:{
        db:{
            url: process.env.DATABASE_URL,
        }
    }
})