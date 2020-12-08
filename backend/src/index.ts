import express from "express";
import dotenv from "dotenv";

import { errorController, WrongRoute } from "./controllers/errorController";

import userRoute from "./routes/userRoute";
import placeRoute from "./routes/placeRoute";

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/places", placeRoute);

app.all("*", WrongRoute);

app.use("*", errorController);

app.listen(3333, () => console.log("Listening on port 3333...."));
