const express = require('express');
const { signupUser, loginUser, getOneProfileByUsername, getOneProfileByEmail, getAllProfiles } = require('../controllers/userController.jsx')

const router = express.Router();

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// get one profile by username
router.get('/profile/username/:username', getOneProfileByUsername)

// get one profile by email
router.get('/profile/email/:email', getOneProfileByEmail)

// get all profiles
router.get('/all', getAllProfiles)

module.exports = router;