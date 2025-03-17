import { describe, expect, test } from "vitest";
import { mobilePhone } from "../src/mobilePhone.js";

describe("mobilePhone", () => {
  test("debe devolver el mensaje correcto de actualización", () => {
    const phone = new mobilePhone("iPhone 16");
    const event = "Temperature is 25°C";

    const result = phone.update(event);

    expect(result).toBe("[iPhone 16] Mobile Phone received weather update: Temperature is 25°C");
  });
});