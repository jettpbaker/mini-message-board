import { messages } from "../messages.js";

export default function renderMessages(req, res) {
  res.render("index", { messages: messages });
}
