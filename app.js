import express from "express";
// import path from 'path';
import morgan from "morgan";
import cors from "cors";

// var indexRouter = require('./routes/index');
import authRouter from "./routes/auth.js";

var app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//app.use('/', indexRouter);
app.use("/api", authRouter);

export default app;
