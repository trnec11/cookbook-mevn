// Require the express package and use express.Router()
const express = require('express');

const router = express.Router();
const UserList = require('../models/User');

// GET HTTP method to /UserList
router.get('/', (req, res) => {
  UserList.getAllLists((err, lists) => {
    if (err) {
      res.send({ success: false, message: `Failed to load all lists. Error: ${err}` });
    } else {
      // res.write(JSON.stringify({success: true, lists:lists},null,2))
      res.send({ success: true, lists });
    //   res.end()
    }
  });
});

// GET HTTP method to /UserList/:id
router.get('/:id', (req, res) => {
  const recipeId = req.params.id;
  // console.log(id)
  UserList.getOne(recipeId, (err, list) => {
    if (err) {
      res.json({ success: false, message: `Failed to load one list. Error: ${err}` });
    } else {
      res.write(JSON.stringify({ success: true, list }, null, 2));
      res.end();
    }
  });
});

// POST HTTP method to /UserList
router.post('/signup', (req, res) => {
  const newList = new UserList({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    passwordConf: req.body.passwordConf,
  });
  UserList.addList(newList, (err, list) => {
    if (err) {
      res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
    } else { res.json({ success: true, message: 'Added successfully.', list }); }
  });
});

// PUT HTTP method to /UserList
router.put('/:id', (req, res) => {
  // console.log(req.params);
  const recipeId = req.params.id;
  UserList.updateListById(recipeId, { $set: req.body }, (err) => {
    if (err) {
      res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
    }
    res.send('updated');
  });
});

// DELETE HTTP method to /UserList. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res) => {
  const recipeId = req.params.id;
  // console.log(req.params);
  UserList.deleteListById(recipeId, (err, list) => {
    if (err) {
      res.json({ success: false, message: `Failed to delete the list. Error: ${err}` });
    } else if (list) {
      res.json({ success: true, message: 'Deleted successfully' });
    } else { res.json({ success: false }); }
  });
});

module.exports = router;
