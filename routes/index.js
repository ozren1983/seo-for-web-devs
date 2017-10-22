const express = require('express')
const router = express.Router()

const checklistController = require('../controllers/checklistController.js')
const homeController = require('../controllers/homeController.js')

// Homepage
router.get('/', homeController.homepage)

// Checklist
router.get('/checklist', checklistController.checklist)

module.exports = router
