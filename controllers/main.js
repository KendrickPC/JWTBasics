// check username, password in post(login) request
// if it exists (username and PW), create a new JWT
// send back to front-end

// setup authentication so only teh request with JWT can access the dashboard.

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
  const {username, password} = req.body

  // mongooose validations
  // Joi
  // if/else check in the controller

  if (!username || !password) {
    throw new CustomAPIError('Plaese provide your email and password', 400)
  }

  // Dummy id usually obtained from a database.
  const id = new Date().getDate()
  // In production, use long & complex & unhackable string values!
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

  // console.log(username, password);
  // res.send('Login/Register/Signup Route')
  res.status(200).json({msg: 'user created', token})
}

const dashboard = async (req, res) => {
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
    console.log("decoded!!!!!: ", decoded);
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello ${decoded.username}`, secret: `Authorized data, your lucky number is ${luckyNumber}`})

  } catch(err) {
    throw new CustomAPIError('Not authorized to access this route', 401)
  }


}

module.exports = {
  login, dashboard
}


