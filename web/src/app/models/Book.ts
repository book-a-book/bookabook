import { User } from "./User";

export class Book {
    _id: String;
    title: String;
    about: String;
    author: String;
    isActive: Boolean;
    picture: String;
    tags: String[];
    created_date: Date;
    owner: String;
    ownerObj: User;
    lendTo: String;
}