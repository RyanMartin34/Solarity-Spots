import express from "express";

const server = express();

server.use(express.static("public"));

server.listen(8000, () => {
  console.log("Server: ON");
});
