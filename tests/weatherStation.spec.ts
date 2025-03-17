import { describe, test, expect, vi } from "vitest";
import { weatherStation } from "../src/weatherStation.js";
import { mobilePhone } from "../src/mobilePhone.js";
import { controlPanel } from "../src/controlPanel.js";

describe("weatherStation", () => {
  test("debería notificar a los observadores cuando cambia la temperatura", () => {
    const station = new weatherStation();
    const phone = new mobilePhone("iPhone 12");
    const panel = new controlPanel("Living Room Panel");

    station.subscribe(phone);
    station.subscribe(panel);

    const phoneSpy = vi.spyOn(phone, "update");
    const panelSpy = vi.spyOn(panel, "update");

    station.changeTemperature(25);

    expect(phoneSpy).toHaveBeenCalledWith(station);
    expect(panelSpy).toHaveBeenCalledWith(station);
  });

  test("debería notificar a los observadores cuando se acerca una tormenta", () => {
    const station = new weatherStation();
    const phone = new mobilePhone("iPhone 12");
    const panel = new controlPanel("Living Room Panel");

    station.subscribe(phone);
    station.subscribe(panel);

    const phoneSpy = vi.spyOn(phone, "update");
    const panelSpy = vi.spyOn(panel, "update");

    station.stormApproach(10);

    expect(phoneSpy).toHaveBeenCalledWith(station);
    expect(panelSpy).toHaveBeenCalledWith(station);
  });

  test("debería desuscribir a los observadores", () => {
    const station = new weatherStation();
    const phone = new mobilePhone("iPhone 12");
    const panel = new controlPanel("Living Room Panel");

    station.subscribe(phone);
    station.subscribe(panel);
    station.unsubscribe(phone);

    const phoneSpy = vi.spyOn(phone, "update");
    const panelSpy = vi.spyOn(panel, "update");

    station.changeTemperature(30);

    expect(phoneSpy).not.toHaveBeenCalled();
    expect(panelSpy).toHaveBeenCalledWith(station);
  });

  test("debería lanzar un error al suscribir un observador ya suscrito", () => {
    const station = new weatherStation();
    const phone = new mobilePhone("iPhone 12");

    station.subscribe(phone);

    expect(() => station.subscribe(phone)).toThrowError(
      "The observer had already been subscribed"
    );
  });

  test("debería lanzar un error al desuscribir un observador no suscrito", () => {
    const station = new weatherStation();
    const phone = new mobilePhone("iPhone 12");

    expect(() => station.unsubscribe(phone)).toThrowError(
      "The observer has not been subscribed"
    );
  });
});