import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../intro";

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

describe("fizzBuzz", () => {
  it("should return FizzBuzz if arguement is divisible by 3 and 5", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz if arguement is only divisible by 3 ", () => {
    const result = fizzBuzz(6);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if arguement is only divisible by  5", () => {
    const result = fizzBuzz(10);
    expect(result).toBe("Buzz");
  });

  it("should return arguement as string if it is not divisible by 3 or 5", () => {
    const result = fizzBuzz(16);
    expect(result).toBe("16");
  });
});
