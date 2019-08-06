const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/venues'
const Venue = require('../project_2/models/schema.js')
const dataSeed = require('./models/dataSeed.js')
const methodOverride = require('method-override');

//middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
	console.log('connected to mongo database')
});

//seed route
app.use('/seed', dataSeed)

// Display Routes for maind index.ejs
app.get('/', (req,res) => {
  Venue.find({}, (err, allVenues) =>  {
    if (err) {
      console.log(err)
    } else {
      console.log('image: ',allVenues.image)
      res.render('index.ejs', {
        venue: allVenues
    })
    }
  })
})

//view details route
app.get('/details/:id', (req, res)  =>  {
  Venue.findById(req.params.id, (err, foundVenue) =>  {
    if (err) {
      console.log(err)
    } else {
    console.log(foundVenue)
    res.render('details.ejs', {
      venue: foundVenue
    })
  }
  
  })
})

//render add.ejs page
app.get('/venues/new', (req, res) => {
  res.render('add.ejs')
})

//create new route
app.post('/', (req, res) => { 
  Venue.create(req.body, (err, createdVenue)=>{
      if (err) {
          console.log(err)
      } else {
        res.redirect('/');
      }
  });
});

//delete route
app.delete('/details/:id', (req, res) => {
    Venue.findByIdAndRemove(req.params.id, (err, deletedVenue) => {
      if (err) {
        console.log(err)
      } else {
    res.redirect('/');
    }
  })
});

app.get('/details/:id/edit', (req, res)=>{
  Venue.findById(req.params.id, (err, foundVenue) => {
    console.log('foundVenue: ', foundVenue)
      if (err) {
          console.log(err)
      } else {
          res.render('edit.ejs', {
              venue: foundVenue 
          });
      }
  });
});

//edit route
app.put('/details/:id', (req, res) => { 
  Venue.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedVenue)=>{
    console.log('updated venue: ',req.body)
      if (err) {
          console.log(err)
      } else {
        res.redirect('/');
      }
  });
});





app.get('/' , (req, res) => {
  res.send('app is running!');
});

app.listen(PORT, () => console.log('Listening on port:', PORT));