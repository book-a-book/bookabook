import { Book } from "./Book";

export class Loan {
    _id: String;
    status: Number;
    book: String;
    owner: String;
    lentTo: String;
    bookObj?: Book;
}