import { OmitClass } from "./omit";

describe('Pick Utility Type', ()=>{
    it('should ', ()=>{
        const anOmitObject = new OmitClass({
            property2: 'A property'
        });

        expect(anOmitObject.anOmitVariable).toEqual({
            property1: undefined,
            property2: 'A property'
        })
    })
})