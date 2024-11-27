import express from "express";

// Base de Dados
const posts = [
    {
        id: 1,
        description: "Teste",
        image: "https://media.licdn.com/dms/image/v2/C4D0BAQFaQ2rt_kVihw/company-logo_200_200/company-logo_200_200/0/1631334580995?e=2147483647&v=beta&t=0gGAf20vE60FAOpZQKZDxmtTdGg7jkP3CdYLVtk5-VE"
    },
    {
        id: 2,
        description: "Novo Post 1",
        image: "https://via.placeholder.com/200"
    },
    {
        id: 3,
        description: "Novo Post 2",
        image: "https://via.placeholder.com/300"
    },
    {
        id: 4,
        description: "Novo Post 3",
        image: "https://via.placeholder.com/400"
    },
    {
        id: 5,
        description: "Novo Post 4",
        image: "https://via.placeholder.com/500"
    }
];


function getPost(id) {
    return posts.findIndex((post) => post.id === Number(id));
}

function main() {

    const app = express();
    app.use(express.json());

    // Rota para obter todos os posts
    app.get("/posts", (req, res) => res.status(200).json(posts));

    // Rota para obter posts específicos
    app.get("/posts/:id", (req, res) => {
        const index = getPost(req.params.id);
        res.status(200).json(posts[index]);
    });

    // Inicia o servidor
    app.listen(3000, () => console.log("Server Listening..."));
}

main();
