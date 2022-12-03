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