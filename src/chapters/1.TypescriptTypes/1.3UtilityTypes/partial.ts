/**
 * The Partial type in TypeScript allows you to make all properties of a type optional. 
 * This is useful when you need to create an object with only a subset of the properties of an existing type.
 */
interface APartialInterface {
    property1: string;
    property2: string;
}
 export class APartialClass {
    aPartialObject: APartialInterface | undefined;
    constructor(aPartialArgument: Partial<APartialInterface>){
        this.aPartialObject = {
            property1: '',
            property2: '',
            ...aPartialArgument}
    }
}