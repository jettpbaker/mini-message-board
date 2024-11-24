import express from "express";
import {
  renderNewMessageForm,
  addNewMessage,
} from "../controllers/newMessageController.js";

const newMessageRouter = express.Router();

newMessageRouter.get("/", renderNewMessageForm);
newMessageRouter.post("/", addNewMessage);

export default newMessageRouter;
