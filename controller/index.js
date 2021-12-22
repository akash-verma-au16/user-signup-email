const User = require('../model/User');
const { sendEmail } = require('../utils/sendGrid');

module.exports.userSignUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();

    const emailStatus = await sendEmail(email);

    res.status(200).json({
      message: 'User Signed in! Email sent successfully.',
      user,
      emailStatus,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'Something went wrong! Please try again.' });
  }
};
