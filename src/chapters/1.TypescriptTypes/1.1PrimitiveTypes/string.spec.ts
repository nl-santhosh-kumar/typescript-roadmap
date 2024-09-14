import { aStringValue } from "./string";

describe("Primitive Types in Typescript", () => {
    it("should test the primitive types in Typescript", () => {
      expect(aStringValue).toEqual("A sample string value");
      expect(typeof aStringValue).toBe("string");
    });
});