/**
 * Omit constructs a type by picking all properties from Type and 
 * then removing Keys (string literal or union of string literals).
 */
export interface AnOmitInterface {
    property1: string;
    property2: string;
}

export type AOmitType = Omit<AnOmitInterface, 'property1'>;

export class OmitClass {
    anOmitVariable: AOmitType | undefined;
    constructor(anOmitInput: AOmitType){
        this.anOmitVariable = anOmitInput;
    }
}