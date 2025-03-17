import { Observer } from "./weatherStation.js";

/**
 * Representa un teléfono móvil que actúa como observador en el patrón Observer.
 * Implementa la interfaz Observer.
 */
export class mobilePhone implements Observer {
  private name: string;

  /**
   * Crea una instancia de mobilePhone.
   * @param name - El nombre del teléfono móvil.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Updates the mobile phone with a weather event.
   * Actualiza el teléfono móvil con un evento meteorológico.
   * @param event - El evento meteorológico con el que actualizar el teléfono.
   * @returns String que indica que el móvil ha recibido la actualización meteorológica.
   */
  update(event: string): string {
    return `[${this.name}] Mobile Phone received weather update: ${event}`;
  }
}