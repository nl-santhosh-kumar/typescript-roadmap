import { anUndefinedVariable } from "./undefined";

describe("Primitive Types in Typescript", () => {
  it("should test the primitive types(undefined) in Typescript", () => {
    expect(anUndefinedVariable).not.toBeDefined();
    expect(typeof anUndefinedVariable).toBe("undefined");
  });
});
