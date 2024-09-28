const express = require('express')
const routes = express.Router()

const userController = require('../controllers/user.controller')

routes.post('/',userController.registerUser)
routes.get('/',userController.getUser)
routes.put('/:id',userController.updateUserById)
routes.delete('/:id',userController.deleteUserById)


module.exports = routes