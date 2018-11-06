import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    about: {
        type: String,
    },
    author: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    picture: {
        type: String
    },
    tags: {
        type: Array,
        of: String
    },
    created_date: {
       type: Date,
       default: Date.now 
    },
    owner: String,

    lendTo: String
});
