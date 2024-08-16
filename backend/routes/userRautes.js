const express = require('express')
const router = express.Router()
const{registrarUser , loginUser ,dataUser} = require('../controllers/usersControllers')

router.post('/registrar', registrarUser)
router.post('/login', loginUser)
router.get('/data', dataUser)

module.exports = router