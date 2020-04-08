import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import PlanetSchema from "../models/Planet";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Planets = mongoose.model("Planet", PlanetSchema)
}

export const dbContext = new DbContext();