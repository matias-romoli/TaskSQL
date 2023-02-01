import express from "express";
export const routes = express.Router();

import { controllers } from "../controllers/controllers.js";
import { auth } from "../utils/functions/index.js";

routes.get("/list", controllers.list);
routes.post("/new", auth, controllers.new);
routes.put("/update/:id", controllers.edit);
routes.get("/list/:id", controllers.listID);
routes.delete("/delete/:id", controllers.delete);
