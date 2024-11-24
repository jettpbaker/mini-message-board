import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";
import exp from "constants";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

// 404

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

// Error Handler - not actually being used

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", { error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
