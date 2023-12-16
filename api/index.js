import express from "express";
let router = express.Router();

import { register, login } from "./auth.js";
import { people } from "./people.js";

router.post("/register", register);
router.post("/login", login);
router.get("/people", people);

export default router;
