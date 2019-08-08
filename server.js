const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/venues'
const Venue = require('../project_2/models/schema.js')
const dataSeed = require('./models/dataSeed.js')
const methodOverride = require('method-override');
const serverController = require('../project_2/controllers/venueController.js')

//middleware
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
	console.log('connected to mongo database')
});

//seed route
app.use('/seed', dataSeed)
app.use('/', serverController)

// Display Routes for maind index.ejs
app.get('/', (req,res) => {
 res.redirect('/venues')
})

app.listen(PORT, () => console.log('Listening on port:', PORT));