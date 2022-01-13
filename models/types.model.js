const mongoose = require('mongoose');

const typeSchema = mongoose.Schema({
    name: String,
})

typeSchema.statics.getAll = function(){
    return this.find();
}

module.exports = mongoose.model('Types', typeSchema);