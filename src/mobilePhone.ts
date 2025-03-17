import { Observer, Observable, weatherStation } from "./weatherStation.js";

/**
 * Representa un teléfono móvil que actúa como observador en el patrón Observer.
 * Implementa la interfaz Observer.
 */
export class mobilePhone implements Observer {
  private name: string;

  /**
   * Crea una instancia de MobilePhone.
   * @param name - El nombre del teléfono móvil.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Actualiza el teléfono móvil con la información del observable.
   * @param observable - El objeto observable (estación meteorológica).
   */
  update(observable: Observable): void {
    if (observable instanceof weatherStation) {
      const temperature = observable.getTemperature();
      const stormDistance = observable.getStormDistance();

      if (temperature !== null) {
        console.log(`[${this.name}] Mobile Phone: Temperature update - ${temperature}°C`);
      } else if (stormDistance !== null) {
        console.log(`[${this.name}] Mobile Phone: Storm alert - Distance: ${stormDistance} km`);
      } else {
        console.log(`[${this.name}] Mobile Phone: No updates available`);
      }
    }
  }
}