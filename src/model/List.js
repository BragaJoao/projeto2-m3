const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true,
    }
});

const List = mongoose.model('lists', ListSchema)

module.exports = List;
