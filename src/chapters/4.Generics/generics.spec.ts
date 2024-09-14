import { aGenericFunction } from "./generics";

describe('Generics', ()=>{
    it('should demonstrate a generics', () => {
        const aStringFunction = aGenericFunction('book title');
        expect(aStringFunction).toEqual('book title');
        expect(typeof aStringFunction).toEqual('string');

        const aNumberFunction = aGenericFunction(100);
        expect(aNumberFunction).toEqual(100);
        expect(typeof aNumberFunction).toEqual('number');
    })
})