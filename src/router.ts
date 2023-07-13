import { Router } from "express";

const router = Router();

router.get("/content", (req, res) => {
  res.json({ message: "content" });
});

export default router;
