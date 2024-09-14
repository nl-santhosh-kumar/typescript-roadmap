
import { GenericClass } from './genericClass';
describe('Generic Class', ()=>{
    it('should demonstrate a generic class', () => {
        const aStringValue = 'a string value';
        const aGenericClassObject = new GenericClass<string>();
        aGenericClassObject.aMember = aStringValue;
        aGenericClassObject.printClassMember = function(argument) {
            return argument;
        }
        expect(aGenericClassObject.printClassMember(aStringValue)).toEqual(aStringValue)
        
    })
})