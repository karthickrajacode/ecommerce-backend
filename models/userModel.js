import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

//schema is a definition of a model
//it means what a model can contain and what are their types

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin:Boolean,
});

userSchema.plugin(paginate);

const User = model('user', userSchema);

export default User;