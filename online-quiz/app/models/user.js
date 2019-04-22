const mongoose = requrie('mongoose');

const UserSchema = new mongoose.Schema({
	name: {type: String, trim: true, required: true},
	email: {type: String, unique: true, trim: true, required: true},
	password: {type: String, unique: true, trim: true, required: true},
	college: {type: String, trim: true, required: true},
	stream: {type: String, trim: true, required: true}
});

UserSchema.statics.authenticate = function (email, password, callback) {
	User.findOne({email: email}).exec((error, user) => {
    if(error){
      return callback(error);
    } else if(!user) {
      let error = new Error('User not Found');
      error.status = 401;
      return callback(error);
    }
    if(password == user.password){
      return callback(null, user);
    }
    return callback(new Error('Invalid Password'));
  });
};

const User = mongoose.model('User', UserSchema);
module.exports.user = User;