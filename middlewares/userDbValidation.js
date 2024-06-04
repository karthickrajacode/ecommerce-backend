import User from "../models/userModel.js";
import Status from "http-status";

export const validationForUniqueEmail = async (req, res, next) => {
    try {
        const data = await User.findOne({ email:req.body.email });
        if (data) {
            return res
                .status(Status.BAD_REQUEST)
                .send({ message: 'User with is email already exist' })
        }
    } catch (error) {
        return res.status(Status.INTERNAL_SERVER_ERROR).send(error);
    }
    next();
};

export const validatevalidUserId = async (req, res, next) => {
    try {
        const data = await User.findById(req.params.id);
        if (!data) {
            return res
                .status(Status.NOT_FOUND)
                .send({ message: 'User with this id is not exist' })
        }
    } catch (error) {
        return res.status(Status.INTERNAL_SERVER_ERROR).send(error);
    }
    next();
};