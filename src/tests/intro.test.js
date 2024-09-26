import { describe, test, it, expect } from "vitest";
import { max } from "../intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    const result = max(2, 1);
    expect(result).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    const result = max(1, 2);
    expect(result).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    const result = max(2, 2);
    expect(result).toBe(2);
  });
});
