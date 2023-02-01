import { TaskService } from "../service/operaciones.service.js";
import { Error } from "../classes/dto/index.js";
import { logger } from "../config/logger.js";
const service = new TaskService();

export const controllers = {
  list: async (req, res) => {
    try {
      res.status(200).json(await service.listTask());
    } catch (error) {
      logger.error(error);
      throw new Error(500, "It was not possible to list the tasks", error);
    }
  },
  listID: async (req, res) => {
    try {
      res.status(200).json(await service.listTaskID(req.params.id));
    } catch (error) {
      logger.error(error);
      throw new Error(500, "It was not possible to list the tasks", error);
    }
  },
  new: async (req, res) => {
    let { title, description } = req.body;
    try {
      await service.newTask(title, description);
      res.status(200).json({
        message: "Task added successfully",
      });
    } catch (error) {
      logger.error(error);
      throw new Error(500, "It was not possible to add a new task", error);
    }
  },
  edit: async (req, res) => {
    let { title, description } = req.body;
    let { id } = req.params;

    try {
      await service.eTask(id, title, description);
      res.status(200).json({
        message: "Task updated successfully",
      });
    } catch (error) {
      logger.error(error);
      throw new Error(500, "It was not possible to edit the task", error);
    }
  },
  delete: async (req, res) => {
    try {
      await service.deleteTask(req.params.id);
      res.status(200).json({
        message: "Task deleted successfully",
      });
    } catch (error) {
      logger.error(error);
      throw new Error(500, "The task could not be deleted", error);
    }
  },
};
