var express = require('express');
var router = express.Router();
var Crime = require('../models/crimesModel');


//Find by Category Code Name
router.get('/find/:code/:name',(request, response) =>{
    Crime.find({category:
            {code: request.params.code,
            name: request.params.name
            }},
    (error, results) =>{
        if (error) response.send(error);
        else response.send(results);
    })
});

// Update location
router.get('/update/:date',(request, response) =>{
    Crime.findOneAndUpdate({
        date: request.params.date,
    },
    (error, results) =>{
        if (error) response.send(error);
        else response.send('Updated ...' +results);
    })
});

//Delete by persistent_id
router.get('/delete/:crime/:persistent_id', (request, response) => {
    Crime.deleteOne({persistent_id:request.params.persistent_id},(error) =>
    {
        if (error) return console.log(error);
        else response.send('Deleted ...');
    });
});

module.exports = router;