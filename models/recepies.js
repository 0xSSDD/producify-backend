var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecepiesSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    ingredients: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Recepies', RecepiesSchema);