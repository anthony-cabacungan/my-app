const express = require('express');
const { signupUser, loginUser, getOneProfile, getAllProfiles } = require('../controllers/userController.jsx')

const router = express.Router();

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// get one profile
router.get('/profile/:username', getOneProfile)

// get all profiles
router.get('/', getAllProfiles)

module.exports = router;