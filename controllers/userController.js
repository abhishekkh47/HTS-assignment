const User = require('../models/userModel');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // login user using static function created using schema
        const user = await User.login(email, password);

        res.status(200).json({ message: "success" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const signupUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        // signup user using static function created using schema
        const user = await User.signup(first_name, last_name, email, password);

        res.status(200).json({ message: 'signup successful' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { loginUser, signupUser }