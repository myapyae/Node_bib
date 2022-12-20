import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    requiredt: true
  },
  actor: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  }
},
  {
    timestamps: true
  }
)

export default model('Movie', MovieSchema)