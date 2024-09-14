import { BookInformation } from "./common.interface";

/**
 * Omit constructs a type by picking all properties from Type and 
 * then removing Keys (string literal or union of string literals).
 */

export type AOmitType = Omit<BookInformation, 'pageCount'>;

export class AnOmitBookStore {
    
    anOmitVariable: AOmitType | undefined;

    constructor(anOmitInput: AOmitType){
        this.anOmitVariable = anOmitInput;
    }
}