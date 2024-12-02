import { creatPost, getAllPosts } from "../models/postsModel.js";
import fs from "fs"

export async function listAllPosts(req, res) {
    const DBPosts = await getAllPosts();
    res.status(200).json(DBPosts);
}

export async function sendNewPost(req, res){
    const postContent = req.body;

    try {
        const finalPost = await creatPost(postContent);
        res.status(200).json(finalPost);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});

    }
}

export async function imageUpload(req, res) {
    const postContent = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const finalPost = await creatPost(postContent);
        const updatedImage = `uploads/${finalPost.insertedId}.png`

        fs.renameSync(req.file.path, updatedImage)
        res.status(200).json(finalPost);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}