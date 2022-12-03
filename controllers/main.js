// check username, password in post(login) request
// if it exists, create a new JWT
// send back to front-end

// setup authentication so only teh request with JWT can access the dashboard.


const login = async (req, res) => {
  res.send('Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({msg: 'Hello Kenjamin Button', secret: `Authorized data, yoru lucky number is ${luckyNumber}`})
}

module.exports = {
  login, dashboard
}