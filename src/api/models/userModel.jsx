const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
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
userSchema.statics.signup = async function(first_name, last_name, email, password) {
    const emailExists = await this.emailExists(email);
    if (emailExists) {
        throw Error('Email already in use')
    }
    
    const hashedPassword = await this.hashPassword(password);
    const user = await this.create({ first_name, last_name, email, password: hashedPassword })
    
    return user
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

const User = mongoose.model('User', userSchema)
module.exports = User