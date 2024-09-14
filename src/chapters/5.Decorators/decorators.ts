/**
 * Decorators are a feature of TypeScript that allow you to modify the behavior of a class, property, method, or parameter. 
 * They are a way to add additional functionality to existing code, 
 * and they can be used for a wide range of tasks, including logging, performance optimization, and validation.
 */

 function aLogDecorator(
     target: Object, 
     propertyKey: string,
     descriptor: PropertyDescriptor
 ){
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
        console.log(`Calling ${propertyKey} with argements: ${args}`)
        return originalMethod.apply(this, args);
    }

    return descriptor;
 }

export class BookStore {
    @aLogDecorator
    print() {
        console.log('This message is from print method')
    }
}