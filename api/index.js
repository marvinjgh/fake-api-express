import express from "express";
import { register, login } from "./auth.js";
import { people } from "./people.js";
import { posts, search } from "./posts.js";
import jwt from "jsonwebtoken";
import users from "../data/users.js";

let router = express.Router();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET, (err, data) => {
    if (err) return res.sendStatus(401);

    req.user = users.getUserById(data.user);
    if (!req.user) return res.sendStatus(401);

    next();
  });
}

router.post("/register", register);
router.post("/login", login);
router.get("/people", authenticateToken, people);
router.get("/posts", authenticateToken, posts);
router.get("/posts/search", search);

export default router;
