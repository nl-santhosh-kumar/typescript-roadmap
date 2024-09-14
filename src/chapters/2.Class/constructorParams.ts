/**
 * Constructor Params
 * In TypeScript, constructor parameters can be declared with access modifiers (e.g. public, private, protected) and/or type annotations. 
 * The parameters are then automatically assigned to properties of the same name within the constructor, and can be accessed within the class.
 */
 export class AConstructorParamsSampleClass {
     aPublicallyAccessibleVariable: string;
     aPrivateAccessibleVariable: string;
    constructor(private aPrivateParameter: string, public aPublicParameter: string ) {
        this.aPublicallyAccessibleVariable = aPublicParameter;
        // private can be access with this keyword 
        this.aPrivateAccessibleVariable = aPrivateParameter;
    }
 }