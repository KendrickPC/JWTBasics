const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error')

const authenticationMiddleware = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  // console.log(req.headers.authorization);
  if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
    throw new CustomAPIError('No TOKEN PROVIDED', 401)
  }
  
  const token = authHeaders.split(' ')[1];
  // console.log("TOKEN!: ", token);
  // Set up for verification stage:
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log("DECODED", decoded);
    const {id, username} = decoded;
    req.user = {id, username};
    next();
  } catch(err) {
    throw new CustomAPIError('Not authorized to access this route', 401)
  }
}

module.exports = authenticationMiddleware;