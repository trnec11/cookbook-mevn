/* eslint-disable no-underscore-dangle */
const express = require('express');

const router = express.Router();
const User = require('../models/User');

// GET HTTP method to /recipelist
router.get('/login', (req, res) => {
  res.send('Hello World');
});


// POST route for updating data
router.post('/data', (req, res, next) => {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    const err = new Error('Passwords do not match.');
    err.status = 400;
    res.send('passwords dont match');
    return next(err);
  }

  if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {
    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    };

    User.create(userData, (error, user) => {
      if (error) {
        return next(error);
      }
      req.session.userId = user._id;
      return res.redirect('/profile');
    });
  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, (error, user) => {
      if (error || !user) {
        const err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      }
      req.session.userId = user._id;
      return res.redirect('/profile');
    });
  } else {
    const err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

// GET route after registering
router.get('/profile', (req, res, next) => {
  User.findById(req.session.userId)
    .exec((error, user) => {
      if (error) {
        return next(error);
      }
      if (user === null) {
        const err = new Error('Not authorized! Go back!');
        err.status = 400;
        return next(err);
      }
      return res.send(`<h1>Name: </h1>${user.username}<h2>Mail: </h2>${user.email}<br><a type="button" href="/logout">Logout</a>`);
    });
});

// GET for logout logout
router.get('/logout', (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  }
});

module.exports = router;
