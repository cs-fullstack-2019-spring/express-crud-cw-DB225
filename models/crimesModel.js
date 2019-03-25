var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var CrimeSchema = new Schema(
    {
        category: [{
            code: String,
            name: String,
        }],
        date: Number,
        person_id: String,
        crime: [{
            category: String,
            location_type: String,
            location: [{
                latitude: Number,
                street: [{
                    id: Number,
                    name: String
                }],
                longitude: Number
            }],
            context: String,
            persistent_id: Number,
            id: Number,
            location_subtype: String,
            month: Number
        }],
    });

//Export model
module.exports = mongoose.model('Crime', CrimeSchema);
