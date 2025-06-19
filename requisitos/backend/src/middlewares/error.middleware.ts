import { NextFunction, Request, Response } from "express";
import { CustomError } from "../interfaces";

export const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "An unexpected error occurred.";

  console.error(`Error ${statusCode}: ${message}`);

  res.status(statusCode).json({
    error: {
      message: message,
    },
  });
};
