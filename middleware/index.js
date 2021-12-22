const validator = require('validator');
const User = require('../model/User');

module.exports.checkCreds = async (req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    return res
      .status(200)
      .json({ message: 'Please provide email and password.' });
  } else if (!validator.isEmail(email)) {
    return res.status(200).json({ message: 'Please provide a valid email.' });
  }

  const user = await User.findOne({ email, password });
  if (user) {
    return res.status(200).json({ message: 'User already exists.' });
  }

  next();
};
