import express from "express";
import { addUser } from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.post("/addUser", addUser);
