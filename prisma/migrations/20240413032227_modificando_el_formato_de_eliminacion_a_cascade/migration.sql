-- DropForeignKey
ALTER TABLE "detalles_productos" DROP CONSTRAINT "detalles_productos_producto_id_fkey";

-- AddForeignKey
ALTER TABLE "detalles_productos" ADD CONSTRAINT "detalles_productos_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
