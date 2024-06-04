import express from "express"
import { productValidation, productUpdateValidation } from "../middlewares/productDataValidation.js";
import { validatevalidProductId, validationForUniqueProduct } from "../middlewares/productDbValidation.js";
import { createProduct, deleteProduct, getAllProducts, updateProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get('/', getAllProducts);

productRouter.post('/', productValidation, validationForUniqueProduct, createProduct);

productRouter.put('/:id', validatevalidProductId, productUpdateValidation, updateProducts);

productRouter.delete('/:id', validatevalidProductId, deleteProduct);

export default productRouter;

