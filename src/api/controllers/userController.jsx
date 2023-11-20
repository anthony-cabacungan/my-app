const User = require('../models/userModel.jsx');
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    const token = jwt.sign({_id}, process.env.SECRET_KEY)
    return token
}

// login user
const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.login(email, password)

        // create JWT
        const _id = user._id
        const token = createToken(_id)
        
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})    
    }
}

// signup user
const signupUser = async (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.signup(first_name, last_name, username, email, password);

        // create JWT
        const _id = user._id
        const token = createToken(_id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get one profile
const getOneProfile = async (req, res) => {
    const { username } = req.params

    try {
        const user = await User.getProfile(username)
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})    
    }
}

// get one profile
const getAllProfiles = async (req, res) => {
    try {

    } catch (error) {
        
    }
}

module.exports = { signupUser, loginUser, getOneProfile, getAllProfiles }