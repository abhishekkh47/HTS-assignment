const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        unique: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// static signup function
userSchema.statics.signup = async function (first_name, last_name, email, password) {
    if (!first_name || !last_name || !email || !password) {
        throw Error('All fields are required');
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid Email');
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already in use');
    }

    const user = await this.create({ first_name, last_name, email, password });
    return user;
}

// static login function
userSchema.statics.login = async function (email, password) {
    try {
        if (!email || !password) {
            throw Error('All fields must be filled');
        }
        const user = await this.findOne({ email, password });
        if (!user) {
            throw Error('Incorrect credentials');
        }
        return user;
    } catch (error) {
        throw Error(error.message);
    }
}

module.exports = mongoose.model('User', userSchema);