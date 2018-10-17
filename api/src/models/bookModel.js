import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a first name'
    },
    about: {
        type: String,
        required: 'Enter a last name'
    },
    author: {
        type: String
    },
    company: {
        type: String
    },
    year: {
        type: Number
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
    }
});
