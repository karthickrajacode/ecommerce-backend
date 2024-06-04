import { productValidationSchema } from "../validations/index.js";
import Status from "http-status";

export const productValidation = (req, res, next) => {
    //1 validation
    const { error } = productValidationSchema.validate(req.body)
    if (error) {
        return res.status(Status.BAD_REQUEST).send(error);
    }
    next();
}

export const productUpdateValidation = (req, res, next) => {
    //1 validation
    const { error } = productValidationSchema.validate(req.body)
    if (error) {
        return res.status(Status.BAD_REQUEST).send(error);
    }
    next();
}