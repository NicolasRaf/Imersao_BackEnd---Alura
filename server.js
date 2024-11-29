import express from "express";
import routes from "./src/routes/postsRoutes.js";

async function main() {
    const app = express();
    routes(app);

    // Inicia o servidor
    app.listen(3000, () => console.log("Server Listening..."));
}

main();
