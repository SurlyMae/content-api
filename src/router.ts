import { Router } from "express";

const router = Router();

router.get("/content", (req, res) => {
  //get all of user's content
});

router.get("/content/:id", () => {
  //get user's content by id
});

router.get("/content/:type", () => {
  //get user's content by content type
});

router.post("/content", () => {
  //create content for this user
});

router.put("/content/:id", () => {
  //edit this content
});

router.delete("/content/:id", () => {
  //delete this content
});
export default router;
