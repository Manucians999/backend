const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    name: String,
    description: String,
    tag: String,
    image: String
})

newSchema.statics.getAll = function(){
    return this.find();
}

newSchema.statics.create_new = function (params) {
    return this.create(params);
};

newSchema.statics.delete = function (id) {
return this.deleteOne({ _id: id });
};

module.exports = mongoose.model('News', newSchema);