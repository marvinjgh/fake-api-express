import savedData from "../data/saved.js";

export function savedGet(req, res, next) {
  res.status(200).send({
    posts: savedData.getUserSaved(req.user.id),
  });

  next();
}

export function savedPost(req, res, next) {
  savedData.add(req.user.id, req.body);

  res.sendStatus(204);

  next();
}
