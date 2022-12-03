// check username, password in post(login) request
// if it exists (username and PW), create a new JWT
// send back to front-end

// setup authentication so only teh request with JWT can access the dashboard.

const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
  const {username, password} = req.body

  // mongo
  // Joi
  // if/else check in the controller

  if (!username || !password) {
    throw new CustomAPIError('Plaese provide your email and password', 400)
  }

  console.log(username, password);
  res.send('Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({msg: 'Hello Kenjamin Button', secret: `Authorized data, yoru lucky number is ${luckyNumber}`})
}

module.exports = {
  login, dashboard
}


