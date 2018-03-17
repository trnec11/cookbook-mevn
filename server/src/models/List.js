
// Require mongoose package
const mongoose = require('mongoose');

// Define RecipelistSchema with title, description and category
const RecipelistSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
});

// Create a model using mongoose.model and export it
const RecipeList = mongoose.model('RecipeList', RecipelistSchema);


// RecipeList.find() returns all the lists
module.exports.getAllLists = (callback) => {
  RecipeList.find(callback);
};

// RecipeList.findOne() returns one list
module.exports.getOne = (id, callback) => {
  const query = { _id: id };
  RecipeList.findById(query, callback);
};

module.exports.updateListById = (id, setup, callback) => {
  const query = { _id: id };
  RecipeList.findByIdAndUpdate(query, setup, callback);
};

// newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
  newList.save(callback);
};

// We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.deleteListById = (id, callback) => {
  const query = { _id: id };
  RecipeList.remove(query, callback);
};
