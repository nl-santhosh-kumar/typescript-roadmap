import { ABookStore } from "./record";


describe('Record Utility Type', ()=>{
    it('should ', ()=>{
        const aBookStoreObject = new ABookStore();
        expect(aBookStoreObject.books).toEqual({
            ComputerScience: { pageCount: 100, prize: 100},
            Mathematics: { pageCount: 12, prize: 120},
            English: { pageCount: 9, prize: 90}
        })
    })
})