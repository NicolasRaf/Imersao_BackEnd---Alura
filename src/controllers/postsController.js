import { getAllPosts } from "../models/postsModel.js";

export async function listAllPosts(req, res) {
    const DBPosts = await getAllPosts();
    res.status(200).json(DBPosts);
}
