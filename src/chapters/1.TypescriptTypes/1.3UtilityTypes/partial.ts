/**
 * The Partial type in TypeScript allows you to make all properties of a type optional. 
 * This is useful when you need to create an object with only a subset of the properties of an existing type.
 */

import { BookInformation } from "./common.interface";

 export class APartialBookStore {
    
    aPartialObject: BookInformation | undefined;

    constructor(aPartialArgument: Partial<BookInformation>){
        this.aPartialObject = {
            pageCount: 200,
            prize: 100,
            ...aPartialArgument}
    }
}