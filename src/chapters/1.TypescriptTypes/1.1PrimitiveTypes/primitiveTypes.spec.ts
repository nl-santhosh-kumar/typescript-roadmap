import {  aStringValue, aBooleanFalseValue, aBooleanTrueValue, aNumberValue, anotherNumberValue, } from "./primitiveTypes";

describe("Primitive Types in Typescript", () => {
  it("should test the primitive types in Typescript", () => {
    expect(aStringValue).toEqual("A sample string value");
    expect(typeof aStringValue).toBe("string");
  });
  it("should test the primitive types(boolean) in Typescript", () => {
    expect(aBooleanTrueValue).toBeTruthy();
    expect(typeof aBooleanTrueValue).toBe("boolean");
    expect(aBooleanFalseValue).toBeFalsy();
    expect(typeof aBooleanFalseValue).toBe("boolean");
  });

  it("should test the primitive types(number) in Typescript", () => {
    expect(aNumberValue).toEqual(1000);
    expect(typeof aNumberValue).toBe("number");
    expect(anotherNumberValue).toEqual(3.14);
    expect(typeof anotherNumberValue).toBe("number");
  });
});
