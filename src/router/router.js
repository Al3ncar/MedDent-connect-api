import express from "express";

import {
  getHome,
  getRegisters,
  createRegister,
  updateRegister,
  deleteRegister,
} from "../controllers/controllers.js";

const route = express.Router();

route.get("/", getHome);
route.get("/api", getRegisters);
route.post("/api/data", createRegister);
route.put("/api/data/:id", updateRegister);
route.delete("/api/data/:id", deleteRegister);

export default route;
