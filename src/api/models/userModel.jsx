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

// check if email exists
userSchema.statics.emailExists = async function (email) {
    const exists = await this.findOne({ email });
    return !!exists; // Return true if the email exists, false otherwise
}

const User = mongoose.model('User', userSchema)
module.exports = User