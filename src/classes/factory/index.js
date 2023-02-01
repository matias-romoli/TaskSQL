import { Contenedor } from "../../container/main.js";
import { env } from "../../config/config.js";

export class FactoryContenedor {
  static get() {
    switch (env.pers) {
      case "MYSQL":
        return new Contenedor();
      default:
        return new Contenedor();
    }
  }
}
