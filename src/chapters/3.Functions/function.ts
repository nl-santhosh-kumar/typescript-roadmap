
interface BookInformation {
    title: string, 
    prize: number, 
    pageCount: number
}

/**
 * Functions are a core building block in TypeScript. 
 * Functions allow you to wrap a piece of code and reuse it multiple times. 
 * Functions in TypeScript can be either declared using function declaration syntax or function expression syntax.  
 * @param title string
 * @param prize number
 * @param pageCount number
 */

export function printBookInformation(title: string, prize: number, pageCount: number): BookInformation {
    return {
        title, prize, pageCount
    }
}