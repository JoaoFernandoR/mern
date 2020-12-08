import { Request, Response } from "express";

export const getAllUsers = (request: Request, response: Response) => {
  response.status(200).json({
    status: "ok",
    message: " It works",
  });
};
