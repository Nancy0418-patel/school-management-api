const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// POST /addSchool
router.post('/addSchool', schoolController.addSchool);

// GET /listSchools
router.get('/listSchools', schoolController.listSchools);

module.exports = router;
