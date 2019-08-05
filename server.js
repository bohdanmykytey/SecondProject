const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/venues'
const Venue = require('../project_2/models/schema.js')
const dataSeed = require('./models/dataSeed.js')
//import schema?


// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
	console.log('connected to mongo database')
});

//router route
app.use('/seed', dataSeed)

// Display Routes
app.get('/', (req,res) => {
  Venue.find({}, (err, allVenues) =>  {
    console.log('image: ',allVenues.image)
    res.render('index.ejs', {
      venue: allVenues
  })
  })
})

app.get('/details/:id', (req, res)  =>  {
  Venue.findById(req.params.id, (err, foundVenue) =>  {
    res.render('details.ejs', {
      venue: foundVenue
    })
  })
})

app.get('/new', (req, res) => {
  res.render('add.ejs')
})



app.get('/' , (req, res) => {
  res.send('app is running!');
});

app.listen(PORT, () => console.log('Listening on port:', PORT));