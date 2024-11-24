import express from "express";
import renderMessages from "../controllers/indexController.js";
const indexRouter = express.Router();

indexRouter.get("/", renderMessages);

export default indexRouter;
