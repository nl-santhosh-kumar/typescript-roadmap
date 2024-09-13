
/**
 * It is a primitive data type in TypeScript that represents textual data. 
 * It is a set of elements of the 16-bit Unicode character set.
 */
export const aStringValue: string = "A sample string value";
export const anotherStringValue: string = 'An another string value';

/**
 * It is a primitive data type in TypeScript that represents numeric values. 
 * It includes both integer and floating-point values.
 */
export const aNumberValue: number = 1000;
export const anotherNumberValue: number = 3.14;
/**
 * boolean is a primitive data type in TypeScript that 
 * represents a boolean value i.e. either true or false.
 * Given below is an example of a boolean variable declaration:
 */
export const aBooleanTrueValue: boolean = true;
export const aBooleanFalseValue: boolean = false;

/**
 * void represents the return value of functions which don’t return a value. 
 * It’s the inferred type any time a function doesn’t have any return statements, 
 * or doesn’t return any explicit value from those return statements.
 * 
 * Note:
 * In JavaScript, a function that doesn’t return any value will implicitly return 
 * the value undefined. However, void and undefined are not the same thing in TypeScript.
 */
export function aVoidFunction():void {
    return;
}

/**
 * undefined represents that the value is uninitialized.
 * A const variable has to be initialised, thus here its being initialised with undefined 
 */
export const anUndefinedVariable: undefined = undefined;

/**
 * null is a primitive value used to represent absent value.
 */
export const aNullValue: null = null;