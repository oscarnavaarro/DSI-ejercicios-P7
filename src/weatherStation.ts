/**
 * Interfaz que representa un objeto observable.
 * Los objetos que implementan esta interfaz pueden ser observados por Observers.
 */
export interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
  getTemperature(): number | null;
  getStormDistance(): number | null;
}

/**
 * Interfaz que representa un observador en el patrón Observer.
 * Los Observers que implementan esta interfaz pueden recibir actualizaciones
 * sobre lo que están observando.
 */
export interface Observer {
  update(observable: Observable): void;
}

/**
 * Clase que representa una estación meteorológica en el patrón Observer.
 * La estación meteorológica puede notificar a los observadores sobre cambios en el evento meteorológico.
 */
export class weatherStation implements Observable {
  private observers: Observer[] = [];
  private temperature: number | null = null;
  private stormDistance: number | null = null;

  /**
   * Suscribe un nuevo observador a la estación meteorológica.
   * @param observer - El observador que se suscribirá.
   */
  public subscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      throw new Error("The observer had already been subscribed");
    } else {
      this.observers.push(observer);
    }
  }

  /**
   * Elimina la suscripción de un observador de la estación meteorológica.
   * @param observer - El observador que se desuscribirá.
   */
  public unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error("The observer has not been subscribed");
    } else {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Notifica a todos los observadores suscritos sobre el evento meteorológico actual.
   */
  public notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  /**
   * Obtiene la temperatura actual.
   * @returns La temperatura actual o null si no está definida.
   */
  public getTemperature(): number | null {
    return this.temperature;
  }

  /**
   * Obtiene la distancia de la tormenta.
   * @returns La distancia de la tormenta o null si no está definida.
   */
  public getStormDistance(): number | null {
    return this.stormDistance;
  }

  /**
   * Simula un cambio de temperatura.
   * @param temperature - La nueva temperatura.
   */
  public changeTemperature(temperature: number): void {
    this.temperature = temperature;
    this.notify();
  }

  /**
   * Simula la aproximación de una tormenta.
   * @param distance - La distancia de la tormenta en kilómetros.
   */
  public stormApproach(distance: number): void {
    this.stormDistance = distance;
    this.notify();
  }
}