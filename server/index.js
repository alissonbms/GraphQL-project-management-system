import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { schema } from "./schema/schema.js";

import { graphqlHTTP } from "express-graphql";

dotenv.config();
const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
//app.use(helmet());
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

app.listen(port, () => console.log(`Server running on port ${port}`));
