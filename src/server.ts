import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { checkAuth, checkRole } from "./modules/auth";
import { createUser, deleteUser, signIn } from "./handlers/user";

const app = express();

app.use(cors()); //all clients allowed
app.use(morgan("dev")); //logging middleware: logs then calls next
app.use(express.json()); //allows clients to send json
app.use(express.urlencoded({ extended: true })); //decodes client query string

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hiiii" });
});

app.use("/api", checkAuth, router);

app.post("/user", createUser); //handled
app.delete("/user", checkAuth, checkRole, deleteUser);
app.post("/signin", signIn); //handled

app.use((err, req, res, next) => {
  res.json({ message: `error: ${err.message}` });
});

export default app;
