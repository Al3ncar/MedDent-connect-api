import express from "express";

import {
  getHome,
  getRegisters,
  createRegister,
} from "../controllers/controllers.js";

const route = express.Router();

route.get("/", getHome);
route.get("/api", getRegisters);
route.post("/api/data", createRegister);
export default route;