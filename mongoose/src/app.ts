import express, {Application} from "express";
import cors from "cors";
import userRouter from "./module/app/app.router";
const app:Application= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/app/api', userRouter);
export default app;