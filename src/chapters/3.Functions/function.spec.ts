import { printBookInformation } from "./function";

describe('Function', ()=>{
    it('should demonstrate an example for a function', () => {
        const aBookInformation = printBookInformation('book title', 100, 200);
        expect(aBookInformation.title).toEqual('book title');
        expect(aBookInformation.pageCount).toEqual(200);
        expect(aBookInformation.prize).toEqual(100);
    })
})