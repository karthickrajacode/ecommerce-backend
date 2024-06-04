import express from "express"
import { userValidation, loginValidation, userUpdateValidation } from "../middlewares/userDataValidation.js";
import { validatevalidUserId, validationForUniqueEmail } from "../middlewares/userDbValidation.js";
import { createUser, deleteUser, getAllUsers, loginUser, updateUser } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.get('/', getAllUsers);

authRouter.post('/register', userValidation, validationForUniqueEmail, createUser);

authRouter.post('/login', loginValidation, loginUser);

authRouter.put('/:id', validatevalidUserId, userUpdateValidation, updateUser);

authRouter.delete('/:id', validatevalidUserId, deleteUser);

export default authRouter;

