import express from "express"
import { catagoryValidation } from "../middlewares/categoryDataValidation.js";
import { validatevalidCategoryId, validationForUniqueCategory } from "../middlewares/categoryDbValidation.js";
import { createCategory, deleteCategory, getAllCategories, updateCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);

categoryRouter.post('/', catagoryValidation, validationForUniqueCategory, createCategory);

categoryRouter.put('/:id', validatevalidCategoryId, catagoryValidation, validationForUniqueCategory, updateCategory);

categoryRouter.delete('/:id', validatevalidCategoryId, deleteCategory);

export default categoryRouter;

