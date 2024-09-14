import { AClass } from "./class";

describe('AClass class', ()=>{
    it('should have a string value and a number value', ()=>{
        const aClassObject = new AClass('a string input value', 100);
        expect(aClassObject).toBeDefined();
        expect(aClassObject.aNumberValue).toEqual(100);
        expect(aClassObject.aStringValue).toEqual('a string input value');
    });
    it('should have default values to its members when no input is given while creating the object', ()=>{
        const aClassObject = new AClass();
        expect(aClassObject).toBeDefined();
        expect(aClassObject.aNumberValue).toEqual(0);
        expect(aClassObject.aStringValue).toEqual('a string value');
    });

})