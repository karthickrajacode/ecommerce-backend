import { loginValidationSchema, userValidationSchema } from "../validations/index.js";
import Status from "http-status";

export const userValidation = (req, res, next) => {
    //1 validation
    const { error } = userValidationSchema.validate(req.body)
    if (error) {
        return res.status(Status.BAD_REQUEST).send(error);
    }
    next();
}

export const loginValidation = (req, res, next) => {
    //1 validation
    const { error } = loginValidationSchema.validate(req.body)
    if (error) {
        return res.status(Status.BAD_REQUEST).send(error);
    }
    next();
}

export const userUpdateValidation = (req, res, next) => {
    //1 validation
    const { error } = userValidationSchema.validate(req.body)
    if (error) {
        return res.status(Status.BAD_REQUEST).send(error);
    }
    next();
}