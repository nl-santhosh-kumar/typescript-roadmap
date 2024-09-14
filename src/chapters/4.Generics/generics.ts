/**
 * Generics in TypeScript are a way to write code that can work with multiple data types, 
 * instead of being limited to a single data type. Generics allow you to write functions, 
 * classes, and interfaces that take one or more type parameters, which act as placeholders
 * for the actual data types that will be used when the function, class, or interface is used.
 */

 export function aGenericFunction<T>(argument: T): T {
     return argument;
 }