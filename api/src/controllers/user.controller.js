const bcrypt = require('bcrypt')
const userService = require('../services/user.service')
const authService = require('../services/auth.service')

async function signup(req, res) {
  const body = req.body;

  const userExists = await userService.findOne({ email: body.email });

  if(userExists) {
   return res.status(400).json({ message: 'Email already exists' })
  }

  const hashPassword = bcrypt.hashSync(body.password, 10);
  body.password = hashPassword;

  const user = await userService.create(body)

  const token = await authService.createToken({ id: user.id, email: user.email, name: user.name })

  return res.status(201).json({ user: { id: user.id, name: user.name, email: user.email }, token })
}

async function login(req, res) {
  const body = req.body;

  const user = await userService.findOne({ email: body.email });

  if(!user) {
    return res.status(401).json({ message: 'Email or Password inccorect' })
  }

  if(!bcrypt.compareSync(body.password, user.password)) {
    return res.status(401).json({ message: 'Email or Password inccorect' })
  }

  const token = await authService.createToken({ id: user.id, email: user.email, name: user.name })

  return res.status(200).json({ user: { id: user.id, name: user.name, email: user.email }, token })
}

module.exports = {
  signup,
  login
}