import { addMessage } from "../db/queries.js";
export function renderNewMessageForm(req, res) {
  res.render("form");
}

export async function addNewMessage(req, res) {
  if (!req.body.messageText || !req.body.messageAuthor) {
    return;
  }

  console.log(
    `Message Text: ${req.body.messageText} | Message Author: ${req.body.messageAuthor}`
  );

  await addMessage(req.body.messageAuthor, req.body.messageText);
  res.redirect("/");
}
