import express from "express";
import { sendNewPost, listAllPosts, imageUpload } from "../controllers/postsController.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json());

     // Rota para obter todos os posts
    app.get("/posts", listAllPosts);

    // Rota para criar e enviar um novo post
    app.post("/posts", sendNewPost);

    app.post("/upload", upload.single("imagem"), imageUpload);
}

export default routes;