/**
 * Ambient modules in TypeScript are used to declare external modules or third-party libraries in a TypeScript program. 
 * Ambient modules provide type information for modules that have no TypeScript declarations, but are available in the global scope.
 */

import { LoggerNameSpace } from './module';

export class AmbientModuleClass {
    printClassMembers(){
        LoggerNameSpace.warning('This is a simple warning message')
    }
}