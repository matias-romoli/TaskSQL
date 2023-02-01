import express from "express";
const app = express();

import { logger } from "./src/config/logger.js";
import { env } from "./src/config/config.js";

import cors from "cors";
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import { routes } from "./src/router/routes.js";
app.use("/", routes);

app.listen(env.server.port, () => {
  logger.info(`Server connected, PORT: ${env.server.port}`);
});
