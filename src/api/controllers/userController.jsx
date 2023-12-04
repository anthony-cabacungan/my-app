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
    console.log(req.data)
    const username = req.body.username;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const description = req.body.description;
    const location = req.body.location;
    const credits = req.body.credits;
    const job_title = req.body.job_title;
    const picture = req.body.picture;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.signup(username, first_name, last_name, description, location, credits, job_title, picture, email, password);
        // create JWT
        const _id = user._id
        const token = createToken(_id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get one profile by username
const getOneProfileByUsername = async (req, res) => {
    const { username } = req.params

    try {
        const user = await User.getProfileByUsername(username)
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})    
    }
}

// get one profile by email
const getOneProfileByEmail = async (req, res) => {
    const { email } = req.params

    try {
        const user = await User.getProfileByEmail(email)
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})    
    }
}

// get all profiles
const getAllProfiles = async (req, res) => {
    try {
        const users = await User.getProfiles()
        console.log(users)
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

module.exports = { signupUser, loginUser, getOneProfileByUsername, getOneProfileByEmail, getAllProfiles }