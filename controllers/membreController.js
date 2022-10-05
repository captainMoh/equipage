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
    .catch(error => res.send(`Error creating new Membre ${error}`))
}

exports.deleteMembre = (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send(`ID unknown : ${req.params.id}`)

    Membre.findByIdAndRemove(req.params.id)
        .then(docs => res.json(docs))
        .catch(error => res.send(`Delete error ${error}`))
}