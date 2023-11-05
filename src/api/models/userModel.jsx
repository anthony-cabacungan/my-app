const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    password: {
        type: String,
        requried: true,
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)