import { categoryValidationSchema } from "../validations/index.js";
import Status from "http-status";

export const catagoryValidation = (req, res, next) => {
    //1 validation
    const { error } = categoryValidationSchema.validate(req.body)
    if (error) {
        return res.status(Status.BAD_REQUEST).send(error);
    }
    next();
}
export const categoryUpdateValidation = (req, res, next) => {
    //1 validation
    const { error } = categoryValidationSchema.validate(req.body)
    if (error) {
        return res.status(Status.BAD_REQUEST).send(error);
    }
    next();
}