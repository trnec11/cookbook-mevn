// Require mongoose package
const mongoose = require('mongoose');

// Define RecipelistSchema with title, description and category
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  },
});

// Create a model using mongoose.model and export it
const User = mongoose.model('User', UserSchema);
module.exports = User;
