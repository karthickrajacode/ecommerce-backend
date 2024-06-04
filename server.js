import { config } from "dotenv";
config();

import express, { json } from "express";
import connectDB from "./db/index.js";
import productRouter from "./router/productRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import authRouter from "./router/authRouter.js";
import orderRouter from "./router/orderRouter.js";

connectDB();

const app = express();
app.use(json());
app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/auth', authRouter);
app.use('/orders', orderRouter)


app.get('*', (req, res) => {
    console.log('request', req);
    res.status(404).send('page not found');
});

// app.get('/products', (req, res) => {
//     console.log('request', req);
//     res.status(200).send('no products exists');
// });

// app.post('/products', (req, res) => {
//     console.log('requestData', req.body);
//     res.status(200).send({ ...req.body, id: 1 })
// });

// app.put('/products/:id', (req, res) => {
//     console.log(req.params);
//     res.status(200).send({ ...req.body, id: req.params.id })
// });

app.listen(5000, () => { console.log('listen on port 5000') });