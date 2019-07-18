import { Router } from 'express';
var router = Router();

// Wikipedia stuff...
import { wiki } from 'wikijs';

var plantsList = [
    'Anaphalis',
    'Yarrow',
    'Rumex',
    'Borage',
    'Symphytum',
    'Thyme',
    'Rhubarb',
    'Tropaeolum',
    'Echinacea',
    'Chives',
    'Eruca sativa',
    'Lupinus',
    'Lavandula',
    'Mentha',
    'Alder',
    'Arctium',
    'Plantago',
    'Chicory',
    'Claytonia_sibirica',
    'Asimina_triloba'
]

var plantsData = [];


plantsList.forEach( function(plant) {
    wiki().page(plant)
    .then( page => {
        getContent(page);
    })
})


// Build Wikipedia content structure...
getContent = function(data) {

    let update = {};

    data.info().then(a => {

        if (a.name !== undefined) {
            update.name = a.name;
        }

    }, (error) => {
        console.log("ERROR ==> ", error)
    })

    data.summary().then(b => { 
        
        update.summary = b 

    }, (error) => {
        console.log("ERROR ==> ", error)
    })

    data.mainImage().then(c => {

        update.image = c
        
    }, (error) => {
        console.log("ERROR ==> ", error)
    })

    update.title = data.raw.title
    update.url = data.raw.canonicalurl

    setContent(update);

}

// build wikipedia content structure
setContent = function(update) {

    plantsData.push(update)

}

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('plants', { 
        plantsData: plantsData
    });

});

export default router;
