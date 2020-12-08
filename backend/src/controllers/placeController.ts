import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";

import ErrorRoute from "../utils/errorRoute";
import location from "../utils/location";

const DUMMY_PLACES = [
  {
    id: "1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    coordinates: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

export const getAllPlaces = (request: Request, response: Response) => {
  response.status(200).json({
    status: "ok",
    message: " It works",
  });
};

export const getPlaceById = (request: Request, response: Response) => {
  const result = DUMMY_PLACES.find((e) => e.id === request.params.id);

  if (result) {
    response.status(200).json({
      status: "ok",
      message: result,
    });
  }

  if (!result) {
    throw new ErrorRoute(
      `Could not find a place with the id: ${request.params.id}`,
      404
    );
  }
};

export const getPlaceByUserId = (request: Request, response: Response) => {
  const result = DUMMY_PLACES.find((e) => e.creator === request.params.id);
  if (result) {
    response.status(200).json({
      status: "ok",
      message: result,
    });
  }
  if (!result) {
    throw new ErrorRoute(`This user: ${request.params.id} was not found`, 404);
  }
};

export const createPlace = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const schema = Yup.object().shape({
      title: Yup.string().required("Título Obrigatório"),
      description: Yup.string().required().max(300),
      address: Yup.string().required().max(100),
      creator: Yup.string().required().max(50),
    });

    await schema.validate(request.body, { abortEarly: false });

    const { title, description, address, creator } = request.body;

    const coordinates = await location(address);

    const newEntry = {
      id: `${DUMMY_PLACES.length + 1}`,
      title,
      description,
      coordinates,
      address,
      creator,
    };

    DUMMY_PLACES.push(newEntry as any);

    response.status(201).json({
      status: "ok",
      message: DUMMY_PLACES,
    });
  } catch (err) {
    next(new ErrorRoute(err.message, 400));
  }
};
