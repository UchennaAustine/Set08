import express, { Application, Request, Response } from "express";
import { envs } from "./utils/env";
import Database from "./config/Database";
import App from "./app";

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  process.exit(-1);
});

const port: number = envs.port;

const app: Application = express();

App(app);

const server = app.listen(process.env.port || port, async () => {
  await Database();
  console.log("Active: ", port);
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  server.close(() => {
    process.exit(-1);
  });
});
