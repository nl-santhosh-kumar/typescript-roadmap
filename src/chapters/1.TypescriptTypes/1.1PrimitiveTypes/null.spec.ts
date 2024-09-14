import { aNullValue } from "./null";

describe("null: Primitive Types in Typescript", () => {

    it("should test the primitive types(null) in Typescript", () => {
      expect(aNullValue).toBeNull();
      expect(typeof aNullValue).toEqual('object');
    });
});