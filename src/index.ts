import serverless from "serverless-http";
import express from "express";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  Context,
} from "aws-lambda";
import { BaseEntity } from "typeorm";
import cors from "cors";
import { useRouter } from "./routers";
import { getConnection } from "@libs/getConnection";

export const handler = async (
  event: APIGatewayProxyEvent | APIGatewayProxyEventV2,
  context: Context
) => {
  try {
    const conn = await getConnection();
    await BaseEntity.useConnection(conn);
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", useRouter());

    const handlers = serverless(app);
    const result = await handlers(event, context);
    return result;
  } catch (e) {
    console.error("error", e);
    return {
      body: "",
    };
  }
};
