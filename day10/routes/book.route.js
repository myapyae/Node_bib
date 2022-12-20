import express from 'express';
import { getBook, createBook} from '../controllers/bookController.js';

const bookRouter = express.Router();

bookRouter.route("/")
    .get(getBook)
    .post(createBook)

export default bookRouter;