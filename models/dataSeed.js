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
            image: ['https://fastly.4sqi.net/img/general/600x600/32647846_haiWrxSDqoUt5VkZAnKhaTbfQMwi-Q8T4XJAzYz0KKM.jpg', 
                    'http://www.opodo.de/blog/wp-content/uploads/sites/11/2014/09/rooftop-new-york-city_le-bain_instagram-e1411486183469.jpg',
                    'http://www.opodo.de/blog/wp-content/uploads/sites/11/2014/09/rooftop-new-york-city_le-bain_instagram_2-e1411486453294.jpg',
                    'http://cdn.shopify.com/s/files/1/0558/2845/articles/NewYorkCity_1_grande.jpg?v=1499390327'],
            review: 'Theres a disco, bar seasonal plunge pool & crêperie, all on the roof of the Standard Hotel.'
        },
        {
            name:'Tao Downtown',
            address:'369 W 16th St New York, NY 10011',
            image: ['https://fastly.4sqi.net/img/general/600x600/579512_BP200qXTYyM3Zm_jrlCf9cS6gPRdUdt5rdviEsVJceg.jpg',
                    'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/3/8/b/e/ebaf-f0a1-4190-ab6c-e87d9986267f.jpg',
                    'https://fastly.4sqi.net/img/general/600x600/8734057_F0WQhi_ILVyLH158tzvDoHl0400QR0scX3sNm2Xtr3Q.jpg',
                    'https://img.grouponcdn.com/deal/2h2wyr4B1S6cSet1RR82geYpx2Ro/2h-1000x600/v1/sc600x600.jpg'],
            review: 'Great Asian Fusion cooking - Even Better on a friday night if you\'re in the mood to go out.'
        },
        {
            name:'PhD',
            address:'355 W 16th St, New York, NY 10011',
            image: ['https://fastly.4sqi.net/img/general/600x600/376174942_WFWaee25uHE7iT6GYobTAjhm9ogcGNDXFzqp6wqEhnI.jpg',
                    'https://fastly.4sqi.net/img/general/600x600/9547145_pLnISsrQr6BVCcA92eBkOTtApYawe2N7ZgZ3z8PUIbY.jpg',
                    'https://fastly.4sqi.net/img/general/600x600/7380598_Nk0PBy7K1Jo1I1nK7xG_-Q99_mvlUmc04IbpXRUFttY.jpg',
                    'http://theblondieistraveling.com/wp-content/uploads/2014/01/img_6942.jpg',],
            review: 'Amazing views, great music - definitely recommended.'
        },
        {
            name: 'Marquee',
            address: '289 10th Ave, New York, NY 10001',
            image: ['https://fastly.4sqi.net/img/general/600x600/32543554_lL8GO6vxlk7kxdebkaLYt3YYhChSw34CgsEF6UK0WPM.jpg',
                    'https://fastly.4sqi.net/img/general/600x600/12451823_oG14_pO8hod-c8SYgI6i2vm1EWeOjJgyqL0ud70Wrqk.jpg',
                    'https://www.channelnewsasia.com/image/10442334/1x1/600/600/2a84aa0f20fa366195b6e6617e381f8d/Ye/marquee-singapore-21-metre-ferris-wheel.jpg',
                    'https://fastly.4sqi.net/img/general/600x600/50021196_9TbGF-zZS3_JMQQxCFjuoZCrdngG-dwUvP162Sl3l0c.jpg'],
            review: 'Great place to see famous DJ\'s perform on a friday night. Tickets are typically only $30 dollas when purchased in advance.'
        },
        {
            name: '1 Oak',
            address: '453 W 17th St, New York, NY 10011',
            image: ['https://66.media.tumblr.com/0f931addc1c22e7663d59e37a76654ba/tumblr_prxj1a9ebJ1smdfn3o1_500.jpg',
                    'http://1oakla.com/img/tt/timthumb.php?src=http://1oakla.com/uploads/gallery/1OAK_LA_Gallery_1.jpg&w=500&h=500',
                    'https://pbs.twimg.com/media/CT7R0CiUwAQQ6AF.png',
                    'https://nyctableservice.com/wp-content/uploads/2019/04/katra-lounge-nyc-bar-800x500-square.jpg'],
            review: 'One of the most exclusive Nighclubs in the country, but definitely woerth the effort.'
        }
    ], (err, data)=>{
        res.redirect('/');
    })
});

module.exports = router;