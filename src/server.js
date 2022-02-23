import "dotenv/config";
import express from "express";
import { router } from "./routers/routers";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3333, () => {
  console.log("Server running on localhost:3333");
});
