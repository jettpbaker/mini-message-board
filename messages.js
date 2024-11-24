export const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export function addMessage(newText, newUser) {
  const newMessage = {
    text: newText,
    user: newUser,
    added: new Date(),
  };

  messages.push(newMessage);
}
