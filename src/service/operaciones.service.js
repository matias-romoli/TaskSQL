import { FactoryContenedor } from "../classes/factory/index.js";
import { Task } from "../classes/dto/index.js";
import { logger } from "../config/logger.js";

export class TaskService {
  constructor() {
    this.cle = FactoryContenedor.get();
  }

  async listTask() {
    try {
      return await this.cle.list();
    } catch (error) {
      logger.error(error);
    }
  }
  async listTaskID(ident) {
    return await this.cle.listID(new Task(ident, "", ""));
  }
  async deleteTask(ident) {
    return await this.cle.delete(new Task(ident, "", ""));
  }
  async newTask(title, description) {
    return await this.cle.new(new Task("", title, description));
  }
  async eTask(ident, title, description) {
    return await this.cle.edit(new Task(ident, title, description));
  }
}
