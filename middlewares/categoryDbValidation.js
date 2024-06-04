import Category from "../models/categoryModel.js";
import Status from "http-status";

export const validationForUniqueCategory = async (req, res, next) => {
    try {
        const data = await Category.findOne({ ...req.body });
        if (data) {
            return res
                .status(Status.BAD_REQUEST)
                .send({ message: 'category with is name already exist' })
        }
    } catch (error) {
        return res.status(Status.INTERNAL_SERVER_ERROR).send(error);
    }
    next();
};

export const validatevalidCategoryId = async (req, res, next) => {
    try {
        const data = await Category.findById(req.params.id);
        if (!data) {
            return res
                .status(Status.NOT_FOUND)
                .send({ message: 'category with this id is not exist' })
        }
    } catch (error) {
        console.log(error)
        return res.status(Status.INTERNAL_SERVER_ERROR).send(error);
    }
    next();
};