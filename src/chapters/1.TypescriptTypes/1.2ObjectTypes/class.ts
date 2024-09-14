/**
 * In TypeScript, a class is a blueprint for creating objects with specific properties and methods.
 * Classes are a fundamental concept in object-oriented programming. 
 * Here is an example of a simple class in TypeScript:
 */
export class AClass {
    aStringValue: string | undefined;
    aNumberValue: number | undefined;

    constructor(aStringParameter: string = 'a string value', aNumberValue: number = 0){
        this.aNumberValue = aNumberValue;
        this.aStringValue = aStringParameter;
    }

    printClassVariables(){
        console.log(`AClass contains a string value: ${this.aStringValue} and a number value: ${this.aNumberValue}.`);
    }
}