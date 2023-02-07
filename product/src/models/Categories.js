import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
    {
        nome:{type: String, required: true},
        status:{type: String, required: true},
    }
); 

const categories = mongoose.model('categories',categoriesSchema);

export default categories; 