import express from "express";
import { listAllPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());

     // Rota para obter todos os posts
    app.get("/posts", listAllPosts);
}

export default routes;