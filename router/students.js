const express = require('express')
const router = new express.Router()
const app = express()
// const dbConnect = require('../conn')
const studentController = require('../controller/studentController')

router.get('/', studentController.readData)

router.post('/create', studentController.insertData)

router.put('/update/:name', studentController.updateData)

router.delete('/delete/:id', studentController.deleteData)

module.exports = router