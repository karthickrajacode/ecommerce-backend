import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

//schema is a definition of a model
//it means what a model can contain and what are their types

const orderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    address: { type: String, required: true },
    quantity: { type: Number, required: true }
});

orderSchema.plugin(paginate);

const Order= model('order', orderSchema);

export default Order;