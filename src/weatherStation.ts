/**
 * Interfaz que representa un observador en el patrón Observer.
 * Los Observers que implementan esta interfaz pueden recibir actualizaciones
 * sobre lo que están observando.
 */
export interface Observer {
  update(event: string): string;
}

/**
 * Clase que representa una estación meteorológica en el patrón Observer.
 * La estación meteorológica puede notificar a los observadores sobre cambios en el evento meteorológico.
 */
export class weatherStation {
  private observers: Observer[] = [];
  private event: string = '';

  /**
   * Suscribe un nuevo observador a la estación meteorológica.
   * @param device - El observador que se suscribirá.
   */
  public subscribe(device: Observer): void {
    this.observers.push(device);
  }

  /**
   * Elimina la suscripción de un observador de la estación meteorológica.
   * @param device - El observador que se desuscribirá.
   */
  public unsubscribe(device: Observer): void {
    this.observers = this.observers.filter(obs => obs != device);
  }

  /**
   * Notifica a todos los observadores suscritos sobre el evento meteorológico actual.
   */
  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this.event);
    }
  }

  /**
   * Establece un nuevo evento meteorológico y notifica a los observadores.
   * @param event - El nuevo evento meteorológico.
   */
  public setEvent(event: string): void {
    this.event = event;
    this.notify();
  }
}