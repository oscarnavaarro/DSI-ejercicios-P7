import { describe, test, expect, vi } from "vitest";
import { controlPanel } from "../src/controlPanel.js";
import { weatherStation } from "../src/weatherStation.js";

describe("controlPanel", () => {
  test("debe manejar cambios de temperatura", () => {
    const panel = new controlPanel("Living Room Panel");
    const station = new weatherStation();

    station.changeTemperature(25);
    const consoleSpy = vi.spyOn(console, "log");

    panel.update(station);

    expect(consoleSpy).toHaveBeenCalledWith(
      "[Living Room Panel] Control Panel: Temperature update - 25°C"
    );
  });

  test("debe manejar alertas de tormenta", () => {
    const panel = new controlPanel("Living Room Panel");
    const station = new weatherStation();

    station.stormApproach(10);
    const consoleSpy = vi.spyOn(console, "log");

    panel.update(station);

    expect(consoleSpy).toHaveBeenCalledWith(
      "[Living Room Panel] Control Panel: Storm alert - Distance: 10 km"
    );
  });

  test("debe manejar ninguna actualización", () => {
    const panel = new controlPanel("Living Room Panel");
    const station = new weatherStation();

    const consoleSpy = vi.spyOn(console, "log");

    panel.update(station);

    expect(consoleSpy).toHaveBeenCalledWith(
      "[Living Room Panel] Control Panel: No updates available"
    );
  });
});