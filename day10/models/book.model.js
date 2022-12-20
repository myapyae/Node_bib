import { Schema, model } from "mongoose";


const BookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
    })

export default model("BOOK", BookSchema)
