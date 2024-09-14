import { AnOmitBookStore } from "./omit";

describe('Pick Utility Type', ()=>{
    it('should ', ()=>{
        const anOmitObject = new AnOmitBookStore({
            prize: 100
        });

        expect(anOmitObject.anOmitVariable).toEqual({
            pageCount: undefined,
            prize: 100
        })
    })
})