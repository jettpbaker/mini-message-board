// import { messages } from "../messages.js";
import { getAllMessages } from "../db/queries.js";

export default async function renderMessages(req, res) {
  const messages = await getAllMessages();
  console.log(messages);

  res.render("index", { messages: messages });
  // res.json(messages);
}
