import express from "express";

function main(){
    const app = express();
    app.listen(3000, () => console.log("Server Listening..."));

    app.get("/api", (req, res) => res.status(200).send("Hello World!"));
}

main();