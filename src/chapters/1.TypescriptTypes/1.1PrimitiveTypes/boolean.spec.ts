import {  aBooleanFalseValue, aBooleanTrueValue, } from "./boolean";

describe("Primitive Types in Typescript", () => {
  it("should test the primitive types(boolean) in Typescript", () => {
    expect(aBooleanTrueValue).toBeTruthy();
    expect(typeof aBooleanTrueValue).toBe("boolean");
    expect(aBooleanFalseValue).toBeFalsy();
    expect(typeof aBooleanFalseValue).toBe("boolean");
  });
});
