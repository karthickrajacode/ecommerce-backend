import Status from "http-status";
import { createToken } from "../utils/index.js";
import User from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        //Bussiness Logic
        // const resp = await user.create(req.body);
        const { name, email, _id } = await User.create(req.body)
        // res.status(201).send(resp)
        res.status(Status.CREATED).send({ name, email, _id })
        // res.status(Status.CREATED).send(resp)
        console.log('user create success...')
    } catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const { pageNumber, pageSize } = req.query;
        const resp = await User.paginate({}, { populate: '', page: pageNumber, limit: pageSize });
        // .find().populate('category');
        // res.status(200).send(resp)
        res.status(Status.OK).send(resp)
        console.log('user Data fetched get success...')
    } catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndUpadate(id, { ...req.body })
        res.status(Status.OK).send({ message: "successfully updated" });
    } catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        res.status(Status.OK).send({ message: "successfully deleted" });
    }
    catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    try {
        // const id = req.params.id;
        const { email, password } = req.body;
        // await user.findByIdAndLogin(id);
        const data = await User.findOne({ email })
        if (data && data.password === password) {
            // res.status(Status.OK).send({ message: "successfully login" });
            const token = createToken({ email: data.email, password: data.password, _id: data._id })
            const {email, _id, name} = data;
            return res.status(Status.OK).send({ _id, email, name, token })
        } res
            .status(Status.BAD_REQUEST)
            .send({ message: "Email or password is incorrect" });
    } catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message });
    }
}

