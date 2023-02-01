import { logger } from "../config/logger.js";
import { env } from "../config/config.js";
import mysql from "mysql2/promise";

let instance = null;

export class DB {
  constructor() {
    this.conection = mysql;
  }
  async on() {
    try {
      const db = this.conection.createPool(env.db);
      logger.info("Connection started");
      return db;
    } catch (error) {
      return logger.error(error);
    }
  }
  async off() {
    try {
      const db = await this.conection.createPool(env.db).end();
      logger.info("Connection terminated");
      return db;
    } catch (error) {
      return logger.error(error);
    }
  }
  static getInstance() {
    if (!instance) {
      instance = new DB();
    }

    return instance;
  }
}
