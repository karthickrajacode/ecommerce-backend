import { decodeToken } from "../middlewares/authValidation.js";
import Order from "../models/orderModel.js";
import Status from "http-status";
import jwt from "jsonwebtoken";

const getUserObject = (headers) => {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    const user = jwt.verify(token, process.env.SEC_KEY)
    console.log("USER", user);
    return user;
};

export const createOrder = async (req, res) => {
    // decodeToken(req)    
    const data = req.body;
    const user = getUserObject(req.headers);
    try {
        //Bussiness Logic
        const resp = await Order.create({
            customer: user._id,
            product: data.productID,
            quantity: data.quantity,
            address: data.address
        });
        // res.status(201).send(resp)
        res.status(Status.CREATED).send({ message: "order has been successfully....." })
        console.log('Order create success...')
    } catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

export const getAllOrders = async (req, res) => {
    try {
        const { pageNumber = 1, pageSize = 10 } = req.query;
        const resp = await Order.paginate({}, { populate: 'product', page: pageNumber, limit: pageSize });
        // .find().populate('category');
        // res.status(200).send(resp)
        res.status(Status.OK).send(resp)
        console.log('Order Data fetched get success...')
    } catch (error) {
        console.log(error);
        res.status(Status.INTERNAL_SERVER_ERROR).send({ message: error.message })
    }
}

export const totalNumerOfProductSold = async (req, res) => {
    const totalOrder = await Order.find().populate('product')
    console.log("TOTAL", totalOrder);
    let totalProductSold = 0;
    let income = 0;
    totalOrder.forEach((item) => {
        const price = item.product.price;
        totalProductSold += item.quantity;
        income += item.quantity * price;
    });
    res.status(Status.OK).send({ totalProductSold, income })
}