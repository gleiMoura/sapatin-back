import { Router } from "express";
import { PutManyProducts, putProductAsFile, PutSingleProduct } from "controllers/productsController";
import { getProducts } from "controllers/productsController";
import schemaValidator from "middlewares/schemaValidator";
import productsSchema from "schemas/productsSchema";
import manyProductsSchema from "schemas/manyProductsSchema";
import multer from "multer";

const upload = multer({ dest: 'uploads/' });

const productsRouter = Router();

productsRouter.post("/product/upload", schemaValidator(productsSchema), PutSingleProduct);
productsRouter.post("/products/upload/many", schemaValidator(manyProductsSchema), PutManyProducts)
productsRouter.get("/products/upload", getProducts);
productsRouter.post("/products/upload/file", upload.single('file'), putProductAsFile)

export default productsRouter;