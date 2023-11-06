const { Router } = require('express')
const userController = require('../controllers/user.controller')

const userRouter = Router();

userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login)

module.exports = {
  userRouter
}