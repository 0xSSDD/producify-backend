var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var factsSchema = new Schema({
    description: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Facts', factsSchema);