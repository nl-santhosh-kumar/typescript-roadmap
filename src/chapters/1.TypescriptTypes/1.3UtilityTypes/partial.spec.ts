import { APartialBookStore } from "./partial";

describe('Partial Utility Type', ()=>{
    it('should ', ()=>{
        const aPartialObject = new APartialBookStore({
            pageCount: 2000
        });

        expect(aPartialObject.aPartialObject).toEqual({
            pageCount: 2000,
            prize: 100
        })
    })
})