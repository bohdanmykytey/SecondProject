const express = require('express');
const router = express.Router();
const Venue = require('../models/schema.js')
// const Seed = require('../models/dataSeed.js')


// Display Routes for maind index.ejs
router.get('/venues', (req,res) => {
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

//render add.ejs page
router.get('/venues/new', (req, res) => {
    res.render('add.ejs')
})

//view details route
router.get('/venues/:id', (req, res)  =>  {
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
  
//create new route
router.post('/venues', (req, res) => { 
    Venue.create(req.body, (err, createdVenue)=>{
        if (err) {
            console.log(err)
        } else {
          res.redirect('/');
        }
    });
});

//delete route
router.delete('/venues/:id', (req, res) => {
    Venue.findByIdAndRemove(req.params.id, (err, deletedVenue) => {
      if (err) {
        console.log(err)
        } else {
        res.redirect('/');
        }
    })
});
  
//edit form show
router.get('/venues/:id/edit', (req, res)=>{
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
router.put('/venues/:id', (req, res) => { 
    Venue.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedVenue)=>{
      console.log('updated venue: ',req.body)
        if (err) {
            console.log(err)
        } else {
          res.redirect('/');
        }
    });
});
  

module.exports = router;