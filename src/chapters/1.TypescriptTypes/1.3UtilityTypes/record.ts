/**
 * Record constructs an object type whose property keys are Keys and whose property values are Type. 
 * This utility can be used to map the properties of a type to another type.
 */

import { BookInformation } from "./common.interface";

export type AvailableBookCategory = 'ComputerScience' | 'Mathematics' | 'English';

export class ABookStore {
    books: Record<AvailableBookCategory, BookInformation> = {
        ComputerScience: { pageCount: 100, prize: 100},
        Mathematics: { pageCount: 12, prize: 120},
        English: { pageCount: 9, prize: 90}
    }

    printAllBooksAvailableInTheBookStore(){
        Object.entries(this.books).forEach(([bookCategory, bookInformation])=>{
            console.log(`Book category(${bookCategory}): page count: ${bookInformation.pageCount} - prize: ${bookInformation.prize}.`);
        })
    }
}