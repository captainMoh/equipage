const mongoose = require('mongoose');

const membre = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    }
})

module.exports.Membre = mongoose.model('Membre', membre);