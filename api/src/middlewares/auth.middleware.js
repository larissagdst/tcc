const authService = require('../services/auth.service')
const userService = require('../services/user.service')

async function authMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;

    const token = authorization?.split(' ')[1];

    if(!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const decodedToken = await authService.validateToken(token);

    const user = await userService.findOne({ id: decodedToken.id })

    if(!user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    req.user = {
      id: user.id,
      name: user.name,
      email: user.email
    }

    next();
  } catch {
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

module.exports = {
  authMiddleware
}