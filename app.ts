import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import user from "./router/router";
import { HTTP, mainError } from "./error/mainError";

const App = (app: Application) => {
  try {
    app.use(express.json());
    app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
      })
    );
    app.all(
      "*",
      (error: mainError, req: Request, res: Response, next: NextFunction) => {
        new mainError({
          name: "Route Error",
          message: `this message is as a result of a wrong route: ${req.originalUrl}`,
          status: HTTP.BAD_REQUEST,
          success: false,
        });
      }
    );
    app.use("/api", user);
  } catch (error: any) {
    console.log(`Application Error: ${error}`);
  }
};

export default App;
