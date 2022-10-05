const { Router } = require('express');
const express = require('express');
const router = express.Router();
const membreController = require('../controllers/membreController');

router.get('/', membreController.getAllMembres);
router.post('/newMembre', membreController.PostMembre);

module.exports = router;