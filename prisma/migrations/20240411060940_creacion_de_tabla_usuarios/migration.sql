-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMIN', 'EMPLEADO', 'CLIENTE');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "correo" TEXT NOT NULL,
    "nombre" TEXT,
    "password" TEXT NOT NULL,
    "tipo_usuario" "TipoUsuario" NOT NULL DEFAULT 'CLIENTE',

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");
