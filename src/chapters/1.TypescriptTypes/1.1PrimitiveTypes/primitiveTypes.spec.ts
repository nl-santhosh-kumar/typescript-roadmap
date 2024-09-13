import { aSampleStringValue } from "./primitiveTypes";

describe("Primitive Types in Typescript", () => {
  it("should test the primitive types in Typescript", () => {
    expect(aSampleStringValue).toEqual("A sample string value");
    expect(typeof aSampleStringValue).toBe("string");
  });
});
