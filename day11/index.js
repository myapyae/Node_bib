import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import movieRouter from "./routes/movie.route.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array())

app.get('/', (req, res) => {
    res.json({ message: "This is default route" })
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE || "").then(() => {
    console.log("DATABASE CONNECTED !", process.env.DATABASE);

    app.listen(PORT, () => {
        console.log("Listen @ ", PORT);
    })

    app.use("/api/movie", movieRouter)
})