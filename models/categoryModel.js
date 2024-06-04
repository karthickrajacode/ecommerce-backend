import { Schema, model } from "mongoose";

//schema is a definition of a model
//it means what a model can contain and what are their types

const categorySchema = new Schema({
    name: { type: String, required: true },
});

const Category = model('category', categorySchema);

export default Category;