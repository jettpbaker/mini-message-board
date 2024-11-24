import { addMessage } from "../messages.js";

export function renderNewMessageForm(req, res) {
  res.render("form");
}

export function addNewMessage(req, res) {
  if (!req.body.messageText || !req.body.messageAuthor) {
    return;
  }

  console.log(
    `Message Text: ${req.body.messageText} | Message Author: ${req.body.messageAuthor}`
  );
  addMessage(req.body.messageText, req.body.messageAuthor);
  res.redirect("/");
}
