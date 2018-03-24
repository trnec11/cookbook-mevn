// Require mongoose package
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define UserListSchema with title, description and category
const UserListSchema = mongoose.Schema({
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

// UserListSchema.pre('save', (next) => {
//     let user = this;
//     bcrypt.hash(user.password, 10, (err, hash) => {
//         if (err) {
//             return next(err);
//         }
//         user.password = hash;
//         next();
//     })
// })

// Create a model using mongoose.model and export it
const UserList = mongoose.model('UserList', UserListSchema);
module.exports = UserList;

// UserList.find() returns all the lists
module.exports.getAllLists = (callback) => {
  UserList.find(callback);
};

// UserList.findOne() returns one list
module.exports.getOne = (id, callback) => {
  const query = { _id: id };
  UserList.findById(query, callback);
};

// UserList.findByIdAndUpdateindOne() update and returns one list
module.exports.updateListById = (id, setup, callback) => {
  const query = { _id: id };
  UserList.findByIdAndUpdate(query, setup, callback);
};

// newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
  newList.save(callback);
};

// We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.deleteListById = (id, callback) => {
  const query = { _id: id };
  UserList.remove(query, callback);
};
