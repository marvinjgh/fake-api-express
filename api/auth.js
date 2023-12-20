import users from "../data/users.js";
import jwt from "jsonwebtoken";
const { createHash } = await import("node:crypto");

function generateToken(user) {
  return jwt.sign(user, process.env.SECRET, { expiresIn: "1800s" });
}

export function register(req, res, next) {
  let hmac = createHash("sha256");

  try {
    let user = users.add(
      req.body.firstName,
      req.body.lastName,
      req.body.username,
      req.body.email,
      hmac.update(req.body.password).digest("hex"),
      req.body.avatar
    );

    res.status(201).send({
      user: { ...user, password: undefined },
      token: generateToken({ user: user.id }),
    });
  } catch (error) {
    if (error.name == "EmailDuplicate") {
      res.status(400).send({ message: "email a ready used" });
    } else if (error.name == "UsernameDuplicate") {
      res.status(400).send({ message: "username a ready used" });
    } else {
      console.error(error);
      res.status(500).send({ message: "internal server error" });
    }
  }

  next();
}

export function login(req, res, next) {
  let hash = createHash("sha256");
  let user = users.getUserByEmail(req.body.email);

  if (!user || hash.update(req.body.password).digest("hex") !== user.password) {
    res.status(400).send({ message: "incorrect email or password" });
  } else {
    res.status(201).send({
      user: {
        ...user,
        password: undefined,
      },
      token: generateToken({ user: user.id }),
    });
  }
}
