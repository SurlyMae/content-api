import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../db";

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 7);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
  );

  return token;
};

export const checkAuth = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("not authorized");
    return;
  }

  const [_, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.send("not authorized");
    return;
  }

  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifiedUser;
    next();
  } catch (error) {
    res.status(401);
    res.send("not authorized");
    return;
  }
};

//check for admin role
export const checkRole = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });

    if (user.role === process.env.ADMIN_ROLE) {
      next();
    } else {
      res.status(401);
      res.send("not authorized");
    }
  } catch (e) {
    next(e);
  }
};
