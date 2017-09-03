let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/project', {useMongoClient: true});

let UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
