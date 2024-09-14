import { APickBookStore } from "./pick";

describe('Pick Utility Type', ()=>{
    it('should ', ()=>{
        const aBookStorePickObject = new APickBookStore({
            pageCount: 200
        });

        expect(aBookStorePickObject.aPickVariable).toEqual({
            pageCount: 200
        })
    })
})