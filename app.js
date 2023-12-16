import express from "express";
// import path from 'path';
import morgan from "morgan";
import cors from "cors";

import apiRoutes from "./api/index.js";

var app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", apiRoutes);

export default app;
