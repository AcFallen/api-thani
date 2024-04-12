-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "propiedades" TEXT NOT NULL,
    "beneficios" TEXT NOT NULL,
    "modo_de_uso" TEXT NOT NULL,
    "imagen" TEXT,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalles_productos" (
    "id" SERIAL NOT NULL,
    "unidad_de_medida" TEXT NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "productoId" INTEGER NOT NULL,

    CONSTRAINT "detalles_productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalles_productos" ADD CONSTRAINT "detalles_productos_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
