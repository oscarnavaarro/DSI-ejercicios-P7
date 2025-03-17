import { describe, expect, test, vi } from "vitest";
import { weatherStation } from "../src/weatherStation.js";
import { mobilePhone } from "../src/mobilePhone.js";
import { controlPanel } from "../src/controlPanel.js";

describe("weatherStation", () => {
  test("debe suscribir observadores", () => {
    const station = new weatherStation();
    const phone = new mobilePhone("iPhone 16");
    const panel = new controlPanel("Living Room Panel");

    station.subscribe(phone);
    station.subscribe(panel);

    expect(station["observers"].length).toBe(2);
  })

  test("debe cancelar la subscripción a los observadores", () => {
    const station = new weatherStation();
    const phone = new mobilePhone("iPhone 16");
    const panel = new controlPanel("Living Room Panel");

    station.subscribe(phone);
    station.subscribe(panel);
    station.unsubscribe(phone);

    expect(station["observers"].length).toBe(1);
    expect(station["observers"][0]).toBe(panel);
  })

  test("debe notificar a todos los observadores cuando ocurre un evento", () => {
    const station = new weatherStation();
    const phone = new mobilePhone("iPhone 12");
    const panel = new controlPanel("Living Room Panel");

    station.subscribe(phone);
    station.subscribe(panel);

    const phoneSpy = vi.spyOn(phone, "update");
    const panelSpy = vi.spyOn(panel, "update");

    station.setEvent("Temperature is 25°C");

    expect(phoneSpy).toHaveBeenCalledWith("Temperature is 25°C");
    expect(panelSpy).toHaveBeenCalledWith("Temperature is 25°C");
  });
})