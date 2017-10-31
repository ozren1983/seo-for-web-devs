const express = require('express')

const checklistController = require('../controllers/checklistController.js')
const homeController = require('../controllers/homeController.js')
const loaderIoController = require('../controllers/loaderIoController.js')

const router = express.Router()


// Homepage
router.get('/', homeController.homepage)

// Checklist
router.get('/checklist', checklistController.checklist)

// Loader.io verification
router.get('/loaderio-e1e64128a587d2cbe4d34a04c17eba88.txt', loaderIoController.verification)

module.exports = router
