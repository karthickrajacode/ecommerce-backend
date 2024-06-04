import Category from "../models/categoryModel.js";
import Status from "http-status";

export const createCategory = async (req, res) => {
    try {
        //Bussiness Logic
        const resp = await Category.create(req.body);
        // res.status(201).send(resp)
        res.status(Status.CREATED).send(resp)
        console.log('category create success...')
    } catch (error) {
        // console.log('Category error in post', error.message);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message });
    }
}

export const getAllCategories = async (req, res) => {
    try {
        const resp = await Category.find()
        // res.status(200).send(resp)
        res.status(Status.OK).send(resp);
        console.log('Category Data fetched get success...');
    } catch (error) {
        // console.log('Category error in get', error.message);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        await Category.findByIdAndUpdate(id, { ...req.body });
        res.status(Status.OK).send({ message: "successfully updated" });
    }
    catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        await Category.findByIdAndDelete(id);
        res.status(Status.OK).send({ message: "successfully deleted" });
    }
    catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message });
    }

}
