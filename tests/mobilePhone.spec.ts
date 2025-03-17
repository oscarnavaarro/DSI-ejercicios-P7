import { describe, test, expect, vi } from "vitest";
import { mobilePhone } from "../src/mobilePhone.js";
import { weatherStation } from "../src/weatherStation.js";

describe("mobilePhone", () => {
  test("debe manejar actualizaciones de temperatura", () => {
    const phone = new mobilePhone("iPhone 12");
    const station = new weatherStation();

    station.changeTemperature(25);
    const consoleSpy = vi.spyOn(console, "log");

    phone.update(station);

    expect(consoleSpy).toHaveBeenCalledWith(
      "[iPhone 12] Mobile Phone: Temperature update - 25°C"
    );
  });

  test("debe manejar alertas de tormenta", () => {
    const phone = new mobilePhone("iPhone 12");
    const station = new weatherStation();

    station.stormApproach(10);
    const consoleSpy = vi.spyOn(console, "log");

    phone.update(station);

    expect(consoleSpy).toHaveBeenCalledWith(
      "[iPhone 12] Mobile Phone: Storm alert - Distance: 10 km"
    );
  });

  test("debe manejar ninguna actualización", () => {
    const phone = new mobilePhone("iPhone 12");
    const station = new weatherStation();

    const consoleSpy = vi.spyOn(console, "log");

    phone.update(station);

    expect(consoleSpy).toHaveBeenCalledWith(
      "[iPhone 12] Mobile Phone: No updates available"
    );
  });
});