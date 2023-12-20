import { randomPost } from "../utils/generators.js";
import { v4 as uuidv4 } from "uuid";

export function posts(req, res, next) {
  let posts = [];

  let randomLength = Math.max(1, Math.floor(Math.random() * 5));

  for (let i = 0; i < randomLength; i++) {
    posts.push({
      id: uuidv4(),
      ...randomPost(),
    });
  }

  res.status(200).send({
    posts,
  });

  next();
}

export function search(req, res, next) {
  let posts = [];
  
  if (!req.query.text || req.query.text.length === 0) {
    res.status(200).send({
      posts,
    });
    return;
  }

  let randomLength = Math.max(1, Math.floor(Math.random() * 5));

  for (let i = 0; i < randomLength; i++) {
    posts.push({
      id: uuidv4(),
      ...randomPost(),
    });
  }

  res.status(200).send({
    posts,
  });

  next();
}
