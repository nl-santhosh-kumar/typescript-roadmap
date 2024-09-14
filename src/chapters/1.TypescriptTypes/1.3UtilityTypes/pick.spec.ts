import { APickClass } from "./pick";

describe('Pick Utility Type', ()=>{
    it('should ', ()=>{
        const aPickClassObject = new APickClass({
            property1: 'A property 1 value'
        });

        expect(aPickClassObject.aPickVariable).toEqual({
            property1: 'A property 1 value'
        })
    })
})