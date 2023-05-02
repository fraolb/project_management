import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";

import notesRoutes from "./routes/notes";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.use((req, res, next)=>{
    next(Error("End point not found"))
})

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "Unknown error occured";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
