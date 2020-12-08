import express from "express";

import { getAllUsers } from "../controllers/userController";

const route = express.Router();

// /api/users
route.get("/", getAllUsers);

export default route;
