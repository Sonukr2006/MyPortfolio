import express from 'express';
import userRouter from "./routes/user.route.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
  })
);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/users", userRouter);

export {app};