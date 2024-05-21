import * as express from "express";
import * as dotenv from "dotenv";
// import cors from "cors";
import { Request, Response } from "express";

import { AppDataSource } from "./data-source";
import { userRouter } from "./routes/user.routes";
import { errorHandler } from "./middlewares/error.middleware";

import "reflect-metadata";
dotenv.config();

const { PORT = 3000 } = process.env;

const app = express();
app.use("/", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Methods", "*");
  next()
});
app.use(express.json());
app.use(errorHandler);
app.use("/users", userRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
