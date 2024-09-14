/**
 * Pick constructs a type by picking the set of properties Keys 
 * (string literal or union of string literals) from Type.
 */
export interface APickInterface {
    property1: string;
    property2: string;
}

export type APickType = Pick<APickInterface, 'property1'>;

export class APickClass {
    aPickVariable: APickType | undefined;
    constructor(aPickInput: APickType){
        this.aPickVariable = aPickInput;
    }
}