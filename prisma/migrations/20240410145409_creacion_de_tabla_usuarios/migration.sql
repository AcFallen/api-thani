-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMIN', 'EMPLEADO', 'CLIENTE');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "correo" TEXT NOT NULL,
    "nombre" TEXT,
    "password" TEXT NOT NULL,
    "tipo_usuario" "TipoUsuario" NOT NULL DEFAULT 'CLIENTE',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");
