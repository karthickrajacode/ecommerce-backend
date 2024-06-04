import { orderValidationSchema } from "../validations/index.js";
import Status from "http-status";

export const orderValidation = (req, res, next) => {
    //1 validation
    const { error } = orderValidationSchema.validate(req.body)
    if (error) {
        return res.status(Status.BAD_REQUEST).send(error);
    }
    next();
}