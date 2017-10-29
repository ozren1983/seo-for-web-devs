const express = require('express')

const checklistController = require('../controllers/checklistController.js')
const homeController = require('../controllers/homeController.js')

const router = express.Router()


// Homepage
router.get('/', homeController.homepage)

// Checklist
router.get('/checklist', checklistController.checklist)

module.exports = router
