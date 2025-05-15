const { jwtService } = require('../services/jwt.service.js');

function authMiddleware(req, res, next) {
  const autorization = req.headers['autorization'] || '';
  const [, token] = autorization.split(' ');

  if (!autorization || !token) {
    res.sendStatus(401);

    return;
  }

  const userData = jwtService.verify(token);

  if (!userData) {
    res.sendStatus(401);

    return;
  }
  next();
}

module.exports = { authMiddleware };
