import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createContent } from "./handlers/content";
const router = Router();

router.get("/content", (req, res) => {
  //get all of user's content
});

router.get("/content/:id", () => {
  //get user's content by id
});

router.post(
  "/content",
  [body(["title", "text"]).exists().isString()],
  handleInputErrors,
  createContent,
);

router.put("/content/:id", () => {
  //edit this content
});

router.delete("/content/:id", () => {
  //delete this content
});
export default router;
