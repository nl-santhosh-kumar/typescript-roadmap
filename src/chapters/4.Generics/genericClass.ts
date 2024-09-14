/**
 * Generics can also be used with classes, interfaces, and object types, 
 * allowing them to work with multiple data types as well.
 */

 export class GenericClass<T> {
    public aMember: T | undefined;

    printClassMember: ((argument: T) => T) | undefined;
 }