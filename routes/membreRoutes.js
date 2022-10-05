const express = require('express');
const router = express.Router();
const membreController = require('../controllers/membreController');

router.get('/', membreController.getAllMembres);
router.post('/newMembre', membreController.PostMembre);
router.delete('/:id', membreController.deleteMembre);

module.exports = router;