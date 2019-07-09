var express = require('express');
var router = express.Router();

const wiki = require('wikijs').default;

var plantsList = [
    'Anaphalis',
    'Yarrow'
]

var plantsData = [];


plantsList.forEach( function(plant) {
    wiki().page(plant)
    .then( page => {
        setContent(page);
    })
})



setContent = function(data) {

    var _summary,
        _title,
        _image,
        _name,
        _synonyms,
        _url;

    data.info().then(a => {
        _name = a.name
        _synonyms = a.synonyms
        // _synonyms.push(a.imageCaption);
    })

    data.summary().then(a => { 
        _summary = a 
    })
    data.mainImage().then(a => {
        _image = a
    })

    _title = data.raw.title
    _url = data.raw.canonicalurl

    plantsData.push({
        title: _title,
        url: _url,
        summary: _summary,
        image: _image,
        name: _name,
        synonyms: _synonyms
    })

}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('plants', { 
        plantsData: plantsData
    });
});

module.exports = router;
