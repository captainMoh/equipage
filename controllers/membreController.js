const ObjectID = require('mongoose').Types.ObjectId;

const { Membre } = require('../model/membre');

exports.getAllMembres = (req, res) => {
    Membre.find({})
        .then(docs => res.send(docs))
        .catch(error => res.status(500).send(error))
}

exports.PostMembre = (req, res) => {
    const newMembre = new Membre({
        nom: req.body.nom
    })

    newMembre.save()
    .then(docs => res.json(docs))
    .catch(error => `Error creating new Membre ${error}`)
}