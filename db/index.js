import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://kart87632:NAexkPuxHBJBgMBL@cluster0.19tdtjr.mongodb.net/");
        console.log("Database Connection Succesfully...")
    } catch (error) {
        console.log("Database not Connected...", error.message)
    }
}

export default connectDB