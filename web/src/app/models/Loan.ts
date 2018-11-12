import { Book } from "./Book";

export class Loan {
    status: Number;
    book: String;
    owner: String;
    lentTo: String;
    bookObj?: Book;
}