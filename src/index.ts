import serverless from "serverless-http";
import express from "express";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  Context,
} from "aws-lambda";
import cors from "cors";

import router from "./routers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

const handlers = serverless(app);
export const handler = async (
  event: APIGatewayProxyEvent | APIGatewayProxyEventV2,
  context: Context
) => {
  const result = await handlers(event, context);
  return { body: result.body };
};
