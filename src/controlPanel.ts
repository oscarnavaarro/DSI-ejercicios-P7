import { Observer, Observable, weatherStation } from "./weatherStation.js";

/**
 * Representa un panel de control que observa actualizaciones meteorológicas.
 */
export class controlPanel implements Observer {
  private name: string;

  /**
   * Crea una instancia de ControlPanel.
   * @param name - El nombre del panel de control.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Actualiza el panel de control con la información del observable.
   * @param observable - El objeto observable (estación meteorológica).
   */
  update(observable: Observable): void {
    if (observable instanceof weatherStation) {
      const temperature = observable.getTemperature();
      const stormDistance = observable.getStormDistance();

      if (temperature !== null) {
        console.log(`[${this.name}] Control Panel: Temperature update - ${temperature}°C`);
      } else if (stormDistance !== null) {
        console.log(`[${this.name}] Control Panel: Storm alert - Distance: ${stormDistance} km`);
      } else {
        console.log(`[${this.name}] Control Panel: No updates available`);
      }
    }
  }
}