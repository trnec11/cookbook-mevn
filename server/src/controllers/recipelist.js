//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const recipelist = require('../models/List');


//GET HTTP method to /recipelist
router.get('/',(req,res) => {
	recipelist.getAllLists((err, lists)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all lists. Error: ${err}`})
		}
		else {
			res.write(JSON.stringify({success: true, lists:lists},null,2));
			res.end()

		}
	})
});


//POST HTTP method to /recipelist

router.post('/recipes/new', (req,res,next) => {
	console.log(req.body);
	let newList = new recipelist({
		title: req.body.title,
		description: req.body.description,
		category: req.body.category
	})
	recipelist.addList(newList,(err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to create a new list. Error: ${err}`})

		}
		else
			res.json({success:true, message: 'Added successfully.'})

	})
})


//DELETE HTTP method to /recipelist. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
	let id = req.params.id;
	console.log(id)
	recipelist.deleteListById(id,(err,list) => {
		if(err) {
			res.json({success:false, message: `Failed to delete the list. Error: ${err}`})
		}
		else if(list) {
			res.json({success:true, message: 'Deleted successfully'})
		}
		else
			res.json({success:false})
	})
})

module.exports = router;
