import express from "express"
import { createMovie, updateMovie, getMovie } from "../controllers/moviesController.js";

const postRouter = express.Router();

//create movie
postRouter.post('/', createMovie)

//update movie
//need to use put method for update
postRouter.put('/update/:id', updateMovie)

//get movie
postRouter.get('/', getMovie)

export default postRouter;