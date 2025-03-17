import { Observer } from "./weatherStation.js";

/**
 * Representa un panel de control que observa actualizaciones meteorológicas.
 */
export class controlPanel implements Observer {
  private name: string;

  /**
   * Crea una instancia de controlPanel.
   * @param name - El nombre del panel de control.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Actualiza el panel de control con una actualización meteorológica.
   * @param event - El evento meteorológico a actualizar.
   * @returns Una string indicando que el panel ha recibido la actualización meteorológica.
   */
  update(event: string): string {
    return `[${this.name}] Control Panel received weather update: ${event}`;
  }
}