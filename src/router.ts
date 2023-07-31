import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createContent, getContent } from "./handlers/content";

const router = Router();

//get all of user's content
router.get("/content", getContent);

router.get("/content/:id", () => {
  //get user's content by id
});

// create content for user
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
