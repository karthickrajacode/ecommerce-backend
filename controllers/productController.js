import Product from "../models/productModel.js";
import Status from "http-status";

export const createProduct = async (req, res) => {
    try {
        //Bussiness Logic
        console.log('QUERY', req.query);
        const resp  = await Product.create(req.body);
        // res.status(201).send(resp)
        res.status(Status.CREATED).send(resp)
        console.log('product create success...')
    } catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const { pageNumber, pageSize } = req.query;
        const resp = await Product.paginate({}, { populate: 'category', page: pageNumber, limit: pageSize });
        // .find().populate('category');
        // res.status(200).send(resp)
        res.status(Status.OK).send(resp)
        console.log('product Data fetched get success...')
    } catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

export const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndUpadate(id, { ...req.body })
        res.status(Status.OK).send({ message: "successfully updated" });
    } catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.findByIdAndDelete(id);
        res.status(Status.OK).send({ message: "successfully deleted" });
    }
    catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message });
    }
}
