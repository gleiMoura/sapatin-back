import { Router } from "express";
import { PutManyProducts, PutSingleProduct } from "controllers/productsController";
import { getProducts } from "controllers/productsController";
import multer from "multer";
import schemaValidator from "middlewares/schemaValidator";
import productsSchema from "schemas/productsSchema";
import manyProductsSchema from "schemas/manyProductsSchema";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const productsRouter = Router();

productsRouter.post("/product/upload", schemaValidator(productsSchema), PutSingleProduct);
productsRouter.post("/products/upload", schemaValidator(manyProductsSchema), PutManyProducts)
productsRouter.get("/products/upload", getProducts);

export default productsRouter;