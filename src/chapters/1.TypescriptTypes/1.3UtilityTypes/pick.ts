/**
 * Pick constructs a type by picking the set of properties Keys 
 * (string literal or union of string literals) from Type.
 */

import { BookInformation } from "./common.interface";

export type APickType = Pick<BookInformation, 'pageCount'>;

export class APickBookStore {
    aPickVariable: APickType | undefined;
    constructor(aPickInput: APickType){
        this.aPickVariable = aPickInput;
    }
}