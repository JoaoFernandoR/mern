import express from "express";

import {
  getAllPlaces,
  getPlaceById,
  getPlaceByUserId,
  createPlace,
} from "../controllers/placeController";

const route = express.Router();

// /api/places
route.get("/", getAllPlaces);
route.get("/:id", getPlaceById);
route.get("/user/:id", getPlaceByUserId);

route.post("/", createPlace);

export default route;
