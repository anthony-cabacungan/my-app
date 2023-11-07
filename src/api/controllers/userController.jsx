const User = require('../models/userModel.jsx');

// login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// signup user
const signupUser = async (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.signup(first_name, last_name, email, password)
        res.status(200).json({first_name, last_name, email, password, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }