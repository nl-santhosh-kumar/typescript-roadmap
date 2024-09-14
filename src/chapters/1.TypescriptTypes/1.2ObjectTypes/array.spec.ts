import { anotherArraryOfNumbers, arrayOfNumbers, arrayOfStrings } from "./array"

describe('Array', ()=>{
    it('should contain only numberes in an array', () => {
        expect(arrayOfNumbers).toEqual([1,2,3,4,5]);
        expect(anotherArraryOfNumbers).toEqual([5,4,3,2,1]);
    });

    it('should contain only string in an array', () => {
        expect(arrayOfStrings).toEqual(['a', 'b']);
    })
})