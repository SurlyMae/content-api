import prisma from "../db";

export const createContent = async (req, res, next) => {
  try {
    const content = await prisma.content.create({
      data: {
        title: req.body.title,
        text: req.body.text,
        userId: req.user.id,
      },
    });

    res.json({ content });
  } catch (e) {
    next(e);
  }
};

// get all user's content
export const getContent = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      include: {
        content: true,
      },
    });
    res.json({ data: user.content });
  } catch (e) {
    next(e);
  }
};
