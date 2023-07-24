import prisma from "../db";

export const createContent = async (req, res, next) => {
  try {
    const content = await prisma.content.create({
      data: {
        title: req.body.title,
        text: req.body.text,
      },
    });

    res.json({ content });
  } catch (e) {
    next(e);
  }
};
