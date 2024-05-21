import * as express from "express";
import { UserController } from "../controllers/user.controllers";
const Router = express.Router();

Router.get("/", UserController.getUsers);
Router.post("/", UserController.createUser);
Router.put("/update/:id", UserController.updateUser);
Router.delete("/delete/:id", UserController.deleteUser);

export { Router as userRouter };
