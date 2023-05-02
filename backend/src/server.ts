import app from "./app";
import env from './util/validateEnv';
import mongoose from "mongoose";


mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
  console.log("mongoose connected");
  app.listen(env.PORT, () => {
    console.log("server running on port: " + env.PORT);
  });
})
.catch(console.error);
