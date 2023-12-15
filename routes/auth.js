import express from "express";
let router = express.Router();

let users = [];
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.awGhRs6fA7cGxHQ5zuFMUEuOiA6cpKk7XLO4AO74RhA";

router.post("/register", function (req, res, next) {
  let bodyParams = req.body;
  if (users.some((user) => user.username == bodyParams.username)) {
    res.status(400).send({ message: "username a ready used" });
  } else {
    users.push(bodyParams);
    delete bodyParams.password
    res.status(201).send({
      user: bodyParams,
      token,
    });
  }
  next();
});

router.post("/login", function (req, res, next) {
  let bodyParams = req.body;
  let user = users.find(
    (user) =>
      user.email == bodyParams.email && user.password == bodyParams.password
  );
  if (!user) {
    res.status(401).send({ message: "email or password not valid" });
  } else {
    delete user.password
    res.status(201).send({
      user,
      token,
    });
  }
});

export default router;
