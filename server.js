import express from "express";
import { authRouter } from "./routers/authRouter.js";

const server = express();

server.use(express.json());

server.use(express.static("public"));

server.use("/api/auth", authRouter);

server.use((req, res) => {
  res.status(404).json({
    error: "Route Not Found",
  });
});

server.listen(8000, () => {
  console.log("Server: ON");
});
