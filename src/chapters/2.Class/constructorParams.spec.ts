import { AConstructorParamsSampleClass } from "./constructorParams"

describe('ConstructorParams', ()=>{
    it('should demonstrate a private and a public variables of a class', () => {
        const anObject = new AConstructorParamsSampleClass('a private input', 'a public input');
        expect(anObject.aPublicallyAccessibleVariable).toEqual('a public input');
        expect(anObject.aPrivateAccessibleVariable).toEqual('a private input');
    })
})