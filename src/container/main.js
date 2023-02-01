import { logger } from "../config/logger.js";
import { DB } from "../db/mysql.js";
const database = DB.getInstance();

export class Contenedor {
  constructor() {
    this.db = database;
  }
  async list() {
    try {
      const db = await this.db.on();

      let sql = "SELECT * FROM newtask";
      const [rows] = await db.query(sql);

      return rows;
    } catch (error) {
      return [];
    } finally {
      await this.db.off();
    }
  }
  async listID(data) {
    try {
      const db = await this.db.on();

      let sql = "SELECT * FROM newtask WHERE ID = ?";
      const [rows] = await db.query(sql, [data.id]);

      return rows;
    } catch (error) {
      logger.error(error);
    } finally {
      await this.db.off();
    }
  }
  async new(data) {
    try {
      const db = await this.db.on();
      let sql = "INSERT INTO newtask(title, description) VALUES (?, ?)";

      return await db.query(sql, [data.title, data.description]);
    } catch (error) {
      logger.error(error);
    } finally {
      await this.db.off();
    }
  }
  async edit(data) {
    try {
      const db = await this.db.on();

      let sql = "UPDATE newtask SET title = ?, description = ? WHERE id = ?";
      return await db.query(sql, [data.title, data.description, data.id]);
    } catch (error) {
      logger.error(error);
    } finally {
      await this.db.off();
    }
  }
  async delete(data) {
    try {
      const db = await this.db.on();

      let sql = "DELETE FROM newtask WHERE id = ?";
      return await db.query(sql, [data.id]);
    } catch (error) {
      logger.error(error);
    } finally {
      await this.db.off();
    }
  }
}
