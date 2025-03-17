import { describe, it, expect } from "vitest";
import { controlPanel } from "../src/controlPanel.js";

describe("controlPanel", () => {
  it("debe devolver el mensaje correcto de actualizaciónn", () => {
    const panel = new controlPanel("Living Room Panel");
    const event = "Temperature is 25°C";

    const result = panel.update(event);

    expect(result).toBe("[Living Room Panel] Control Panel received weather update: Temperature is 25°C");
  });
});