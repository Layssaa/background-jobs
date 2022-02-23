import express from "express";
import userController from "../controllers/user-controller";

const router = express.Router();

router.post("/users", userController.store);

export { router };
