/*
  Warnings:

  - You are about to drop the column `productoId` on the `detalles_productos` table. All the data in the column will be lost.
  - You are about to drop the column `categoriaId` on the `productos` table. All the data in the column will be lost.
  - Added the required column `producto_id` to the `detalles_productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria_id` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "detalles_productos" DROP CONSTRAINT "detalles_productos_productoId_fkey";

-- DropForeignKey
ALTER TABLE "productos" DROP CONSTRAINT "productos_categoriaId_fkey";

-- AlterTable
ALTER TABLE "detalles_productos" DROP COLUMN "productoId",
ADD COLUMN     "producto_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "productos" DROP COLUMN "categoriaId",
ADD COLUMN     "categoria_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalles_productos" ADD CONSTRAINT "detalles_productos_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
