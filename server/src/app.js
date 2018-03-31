// We will declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const recipelist = require('./controllers/recipelist');
// const userlist = require('./controllers/userlist');

// Connect mongoose to our database
mongoose.connect(config.database);

// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// Declaring Port
const port = 8081;

// Initialize our app variable
const app = express();

// Html template - pug
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

// Middleware for CORS
app.use(cors());

// Middlewares for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files

*/
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.send('Invalid page');
});

// Routing all HTTP requests to /recipelist to recipelist controller
app.use('/recipes', recipelist);

// 404
app.use((req, res) => {
  res.sendStatus(404);
});

// Listen to port 3000
app.listen(port, () => {
  // console.log(`Starting the server at port ${port}`);
});
