import { aNumberValue, anotherNumberValue } from "./number";

describe('number primitive type', () => {
    it("should test the primitive types(number) in Typescript", () => {
        expect(aNumberValue).toEqual(1000);
        expect(typeof aNumberValue).toBe("number");
        expect(anotherNumberValue).toEqual(3.14);
        expect(typeof anotherNumberValue).toBe("number");
      });
})