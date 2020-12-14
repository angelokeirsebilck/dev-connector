const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).send({
      msg: 'No token, athorizaten denied.',
    });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;

    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send({
      msg: 'Token is not valid.',
    });
  }
};

module.exports = auth;
