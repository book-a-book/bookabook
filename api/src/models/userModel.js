import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String,
        required: 'Enter a username'
    },
    password: {
        type: String,
        required: 'Enter a password'
    },

    isActive: {
        type: Boolean
    },
    picture: {
        type: String
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});

// hash the password
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };
  
// checking if password is valid
UserSchema.methods.validPassword = function(password) {
return bcrypt.compareSync(password, this.password);
};



