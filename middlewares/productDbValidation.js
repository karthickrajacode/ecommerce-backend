import Product from "../models/productModel.js";
import Status from "http-status";

export const validationForUniqueProduct = async (req, res, next) => {
    try {
        const data = await Product.findOne({ ...req.body.name });
        if (data) {
            return res
                .status(Status.BAD_REQUEST)
                .send({ message: 'Product with is name already exist' })
        }
    } catch (error) {
        return res.status(Status.INTERNAL_SERVER_ERROR).send(error);
    }
    next();
};

export const validatevalidProductId = async (req, res, next) => {
    try {
        const data = await Product.findById(req.params.id);
        if (!data) {
            return res
                .status(Status.NOT_FOUND)
                .send({ message: 'Product with this id is not exist' })
        }
    } catch (error) {
        return res.status(Status.INTERNAL_SERVER_ERROR).send(error);
    }
    next();
};