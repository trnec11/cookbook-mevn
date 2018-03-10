const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const mongoose = require('mongoose')
const dbconfig = require('./config/database')
const recipelist = require('./controllers/recipelist')
mongoose.connect(dbconfig.database);


const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/recipes', (req, res) => {
	res.send(
		[{
			title: 'Hello World!',
			description: 'Hi there! How are you?'
		}]
	)
})

// app.use('/bucketlist',bucketlist);

app.listen(process.env.PORT || 8081)