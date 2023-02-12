import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { schema } from "./schema/schema.js";

import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false,
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

/* MONGOOSE SETUP */

const PORT = process.env.PORT || 3002;
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
