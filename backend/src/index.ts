
/// <reference path="./types/express.d.ts" />

import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import {CONNECTDB} from "./config/connectDB"
import {PORT} from "./config/serverConfig"
import userRouter from "./routes/userRoutes"
import taskRouter from "./routes/taskRoutes"

const app=express();

app.use(cors({
    credentials:true,
}))

app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression());

const port:number=PORT;

app.use('/user',userRouter);
app.use('/task',taskRouter);

app.listen(port,()=>{
    CONNECTDB();
    console.log(`server running on http://localhost:${port}`);
})
