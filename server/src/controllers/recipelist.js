// Require the express package and use express.Router()
const express = require('express');

const router = express.Router();
const RecipeList = require('../models/List');

// GET HTTP method to /recipelist
router.get('/', (req, res) => {
  RecipeList.getAllLists((err, lists) => {
    if (err) {
      res.send({ success: false, message: `Failed to load all lists. Error: ${err}` });
    } else {
      // res.write(JSON.stringify({success: true, lists:lists},null,2))
      res.send({ success: true, lists });
    }
  });
});

// GET HTTP method to /recipelist/:id
router.get('/:id', (req, res) => {
  const recipeId = req.params.id;
  // console.log(id)
  RecipeList.getOne(recipeId, (err, list) => {
    if (err) {
      res.json({ success: false, message: `Failed to load one list. Error: ${err}` });
    } else {
      res.write(JSON.stringify({ success: true, list }, null, 2));
      res.end();
    }
  });
});

// POST HTTP method to /recipelist
router.post('/add', (req, res) => {
  const newList = new RecipeList({
    title: req.body.title,
    description: req.body.description,
    settings: req.body.settings
  });
  RecipeList.addList(newList, (err, list) => {
    if (err) {
      res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
    } else { res.json({ success: true, message: 'Added successfully.', list }); }
  });
});

// PUT HTTP method to /recipelist
router.put('/:id', (req, res) => {
  // console.log(req.params);
  const recipeId = req.params.id;
  RecipeList.updateListById(recipeId, { $set: req.body }, (err) => {
    if (err) {
      res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
    }
    res.send('updated');
  });
});

// DELETE HTTP method to /recipelist. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res) => {
  const recipeId = req.params.id;
  // console.log(req.params);
  RecipeList.deleteListById(recipeId, (err, list) => {
    if (err) {
      res.json({ success: false, message: `Failed to delete the list. Error: ${err}` });
    } else if (list) {
      res.json({ success: true, message: 'Deleted successfully' });
    } else { res.json({ success: false }); }
  });
});

module.exports = router;
