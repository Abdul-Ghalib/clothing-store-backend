import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*", // allow all origins or customize as needed
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes import
import userRouter from "./routes/user-routes.js";
import postRouter from "./routes/post-routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

app.get("/", (req, res) => {
  res.json({ message: "Clothing Store Backend API is running!" });
});

// example route: http://localhost:4000/api/v1/users/register

export default app;