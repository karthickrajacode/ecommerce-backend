import express from "express"
// import { userUpdateValidation } from "../middlewares/userDataValidation.js";
// import { validatevalidUserId} from "../middlewares/userDbValidation.js";
// import { deleteUser, getAllUsers, updateUser } from "../controllers/authController.js";
import { authoriseUser } from "../middlewares/authValidation.js";
import { createOrder, getAllOrders, totalNumerOfProductSold } from "../controllers/orderController.js";
import { orderValidation } from "../middlewares/orderDataValidation.js";


const orderRouter = express.Router();

orderRouter.get('/', authoriseUser, getAllOrders);

orderRouter.post('/', authoriseUser, orderValidation, createOrder);

orderRouter.get('/stats', authoriseUser, totalNumerOfProductSold)

export default orderRouter;

