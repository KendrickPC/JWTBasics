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
  const token = jwt.sign({id, username}, )

  console.log(username, password);
  res.send('Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({msg: 'Hello Kenjamin Button', secret: `Authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
  login, dashboard
}


