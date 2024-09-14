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
