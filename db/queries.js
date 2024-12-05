import pool from "./pool.js";

export async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
}

export async function addMessage(username, text) {
  try {
    await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [
      username,
      text,
    ]);
  } catch (error) {
    console.error("Error adding message:", error);
    throw error;
  }
}
