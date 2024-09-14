import { APartialClass } from "./partial"

describe('Partial Utility Type', ()=>{
    it('should ', ()=>{
        const aPartialObject = new APartialClass({
            property1: 'A property 1 value'
        });

        expect(aPartialObject.aPartialObject).toEqual({
            property1: 'A property 1 value',
            property2: ''
        })
    })
})