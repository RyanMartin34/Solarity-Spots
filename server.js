import express from "express";
import session from "express-session";
import { authRouter } from "./routers/authRouter.js";
import "dotenv/config";

const server = express();

server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

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
