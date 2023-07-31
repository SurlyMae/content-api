import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { checkAuth } from "./modules/auth";
import { signUp, signIn } from "./handlers/user";

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

app.post("/signup", signUp); //handled, tested
app.post("/signin", signIn); //handled

//catch-all handler for unhandled errors
app.use((err, req, res, next) => {
  res.json({ message: `error: ${err.message}` });
});

export default app;
