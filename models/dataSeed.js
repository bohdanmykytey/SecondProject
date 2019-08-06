const express = require('express');
const router = express.Router();
const Venue = require('../models/schema.js')

//constroller/router routes






//seed data 
router.get('/', (req, res)=>{
    Venue.create([
        {
            name:'Le Bain',
            address: "The Standard, High Line, 848 Washington St, New York, NY 10014",
            image: ['https://tr-images.condecdn.net/image/xKJW6QgK6DE/crop/810/f/azul-on-the-rooftop-at-hotel-hugo-new-york-conde-nast-traveller-13may16-pr_1.jpg',
                    'https://tr-images.condecdn.net/image/Dzma0V0bprA/crop/810/f/le-bain-at-the-standard-hotel-new-york-conde-nast-traveller-13may16-Todd-Eberle_5.jpg',
                    'https://tr-images.condecdn.net/image/9PeEDXDngGy/crop/810/f/Frozen-Passionfruit-Mojito-at-azul-on-the-rooftop-at-hotel-hugo-new-york-conde-nast-traveller-13may16-pr.jpg',],
            review: 'Theres a disco, bar seasonal plunge pool & crêperie, all on the roof of the Standard Hotel.'
        },
        {
            name:'Tao Downtown',
            address:'369 W 16th St New York, NY 10011',
            image: ['https://nyc-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/34518827996_d81f26d8fc_o-1-640x426.jpg',
                    'https://nyc-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/34173947100_5dee54d9ed_o-681x453.jpg',
                    'https://s3.amazonaws.com/foodfan/image/taodowntown1_5a9b4a3d-5e36-4324-ad75-ad784cd261e5.png',],
            review: 'Theres a disco, bar seasonal plunge pool & crêperie, all on the roof of the Standard Hotel.'
        },
        {
            name:'PhD',
            address:'355 W 16th St, New York, NY 10011',
            image: ['https://phdlounge.com/wp-content/uploads/2013/12/frntCm2wzgWkvnh328pJkAMJ3-Z6RIcnxSIL7-n60Bw.jpg',
                    'https://phdlounge.com/wp-content/uploads/2013/12/ph-d-events-fb_040.jpg',
                    'https://phdlounge.com/wp-content/uploads/2018/10/BFA_16230_2026263-1.jpg',],
            review: 'Theres a disco, bar seasonal plunge pool & crêperie, all on the roof of the Standard Hotel.'
        },
        {
            name: 'Marquee',
            address: '289 10th Ave, New York, NY 10001',
            image: ['https://marqueesingapore.com/wp-content/gallery/test-one/Screen-Shot-2019-05-13-at-11.39.17-AM.png',
                    'https://marqueesingapore.com/wp-content/gallery/test-one/MBS_Marquee_View00-Entrance_2018-05-06-min.jpg',
                    'https://media.timeout.com/images/102030497/1024/576/image.jpg',
                    'http://www.lasvegasguestlist.com/wp-content/uploads/Marquee-Nightclub-960x608.jpgr'],
            review: 'Theres a disco, bar seasonal plunge pool & crêperie, all on the roof of the Standard Hotel.'
        },
        {
            name: '1 Oak',
            address: '453 W 17th St, New York, NY 10011',
            image: ['https://joonbug.imgix.net/ER4dhwhVmty/1oakla16.jpg',
                    'https://photos.lasvegassun.com/media/img/photos/2013/11/15/2.jpg',
                    'https://pbs.twimg.com/profile_images/940716505049784320/LwLoIei9.jpg',
                    'https://www.galavantier.com/sites/default/files/styles/events_single_event_flyer/public/events/1OAKnycSat.jpg?itok=tjBuFo0U'],
            review: 'Theres a disco, bar seasonal plunge pool & crêperie, all on the roof of the Standard Hotel.'
        }
    ], (err, data)=>{
        res.redirect('/');
    })
});

module.exports = router;