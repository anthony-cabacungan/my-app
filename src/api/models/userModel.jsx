const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        requried: true,
        unique: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    credits: {
        type: String    
    },
    job_title: {
        type: String
    },
    picture: {
        type: String
    },
    email: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        requried: true
    }
})

// log in method
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email })

    // check if email is valid
    if (!user) {
        throw Error('Invalid email')
    }
    
    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

// sign up method
userSchema.statics.signup = async function(username, first_name, last_name, description, location, credits, job_title, picture, email, password) {
    const emailExists = await this.emailExists(email);
    if (emailExists) {
        throw Error('Email already in use')
    }

    const usernameExists = await this.usernameExists(username);
    if (usernameExists) {
        throw Error('Username already in use')
    }
    
    const hashedPassword = await this.hashPassword(password);
    const user = await this.create({ username, first_name, last_name, description, location, credits, job_title, picture, email, password: hashedPassword })
    
    return user
}

// get profile method
userSchema.statics.getProfile = async function(username) {
    const user = await this.findOne({ username });
    if (!user) {
        throw Error('Username not found')
    }

    const userProfile = {
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        description: user.description,
        location: user.location,
        credits: user.credits,
        job_title: user.job_title,
        picture: user.picture
    };

    return userProfile
}

// get all profiles method
userSchema.statics.getProfiles = async function() {
    const users = await this.find({});
        if (users.length === 0) {
            throw new Error('No users in the database');
        }

        const userProfiles = users.map(user => ({
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            description: user.description,
            location: user.location,
            credits: user.credits,
            job_title: user.job_title,
            picture: user.picture
        }));

    return userProfiles
}

// hash password
userSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash;
}

// compare password
userSchema.statics.comparePassword = async function(password_user, password_db) {
    const match = await bcrypt.compare(password_user, password_db)
    return match;
}

// check if email exists
userSchema.statics.emailExists = async function (email) {
    const exists = await this.findOne({ email });
    return !!exists; // Return true if the email exists, false otherwise
}

// check if username exists
userSchema.statics.usernameExists = async function (username) {
    const exists = await this.findOne({ username });
    return !!exists; // Return true if the username exists, false otherwise
}

const User = mongoose.model('User', userSchema);
module.exports = User;