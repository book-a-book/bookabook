import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);


export const userRegist = (req, res) => {

    var new_user = new User({
        username: req.body.username,
        password: ''
      });
    
      new_user.password = new_user.generateHash(req.password);
      new_user.save();

      res.json({ message: 'Successfully registed'});

}

export const userLogin = (req, res) => {

    User.findOne({username: req.body.username}, function(err, user) {

        console.log(req.body.password)
        if (!user.validPassword(req.body.password)) {
            res.json({ message: 'Bad credentials'});
        } else {
            res.json({ message: 'Successfully loged in'});

        }
      });
}
