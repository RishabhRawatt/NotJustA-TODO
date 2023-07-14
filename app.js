import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

//made router to simplify routes and urls
const router = express.Router();

config({
  path:"./data/config.env",
})

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  // origin:[process.env.FRONTEND_URL],
  origin:"http://localhost:5173/",
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,
}));


//keep router at last
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);


app.get("/", (req, res) => {
  res.send("hello world");
});


//error handler
app.use(errorMiddleware);