import connectToBank from "../config/dataBaseConfig.js";

// Inciando conexão com o banco de dados;
const connectionData = await connectToBank(process.env.CONNECTION_STRING);

export async function getAllPosts() {
    const dataBase = connectionData.db("ImersaoBackEnd");
    const collection = dataBase.collection("posts");

    return collection.find().toArray();
}


export async function creatPost( postContent ) {
    const dataBase = connectionData.db("ImersaoBackEnd");
    const collection = dataBase.collection("posts");

    return collection.insertOne(postContent);
}