import { Request, Response, NextFunction } from "express";

import errorRoute from "../utils/errorRoute";

export const errorController = (
  error: errorRoute,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  error.code = error.code || 500;
  error.message = error.message || "error";

  response.status(error.code).json({
    status: "failure",
    message: error.message,
  });
};

export const WrongRoute = (request: Request, response: Response) => {
  return response.status(404).json({
    status: "Failure",
    message: `Can't find ${request.originalUrl} on this server`,
  });
};
