const express = require('express')
require('dotenv').config()
const router = express.Router()
const Users = require('../models/Users')
const { body, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const getuser = require('../middlleware/getuser')
var nodemailer = require('nodemailer');

const JWT_SECRET = process.env.JWTSECRET;

// localhost:5000/api/auth/createuser --> Post request to create user   ..... No login required
router.post('/createuser', [
    body('name', 'Name must be atleast 3 characters long').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be 5 characters long').isLength({ min: 5 }),
], async (req, res) => {
    // If there are any error, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // is there any duplicate email present
        let success = false;
        let user = await Users.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "This email already exists" })
        }

        // Hashing password
        const salt = await bcryptjs.genSalt(10);
        const secPass = await bcryptjs.hash(req.body.password, salt);

        // Creating entry in Db
        user = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        // Creating a json web token
        const data = {
            user: {
                id: user.id
            }
        }
        const jwtoken = jsonwebtoken.sign(data, JWT_SECRET);

        // Send a response to the user with jwtoken
        success = true
        res.json({ success, token: jwtoken });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// localhost:5000/api/auth/login --> Post request to login user   ..... No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    // If there are any error, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        // Checking the user exists or not
        let success = false;
        let userName = 'Profile Name'
        let user = await Users.findOne({ email });
        if (!user) {
            return res.status(400).json({ userName, success, error: "Invalid credentials" })
        }

        // Password checking
        const comparePassword = await bcryptjs.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ userName, success, error: "Invalid credentials" })
        }

        // Creating a json web token
        const data = {
            user: {
                id: user.id
            }
        }
        const jwtoken = jsonwebtoken.sign(data, JWT_SECRET);

        // Send a response to the user with jwtoken
        userName = user.name;
        success = true;
        res.json({ userName, success, token: jwtoken });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// localhost:5000/api/auth/forgetpassword --> Post request to forget password   ..... No login required
router.post('/forgetpassword', [
    body('email', 'Enter a valid email').isEmail(),
], async (req, res) => {
    // If there are any error, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;
    try {
        // Checking the user exists or not
        let success = false;
        let userName = 'Profile Name'
        let user = await Users.findOne({ email });
        if (!user) {
            return res.status(400).json({ userName, success, error: "User doesn't exist!!" })
        }

        // Creating a json web token
        const data = {
            user: {
                id: user.id
            }
        }
        const jwtoken = jsonwebtoken.sign(data, JWT_SECRET);

        // Send a response to the user with jwtoken
        success = true;
        res.json({ userName, success, token: jwtoken });
        const mailid = process.env.MYMAIL;
        const mailpass = process.env.NODEMAILERPASS

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: mailid,
                pass: mailpass
            }
        });

        var mailOptions = {
            from: mailid,
            to: email,
            subject: 'Reset Your WebBook Password',
            text: `http://localhost:3000/resetpass/${user.id}/${jwtoken}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                return res.send({ Status: "Success" })
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// localhost:5000/api/auth/resetpassword/:id/:token --> Post request to reset password   ..... No login required
router.post('/resetpassword/:id/:token', [
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    // If there are any error, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id, token } = req.params;
    const { password } = req.body;

    try {
        // Updating entry in Db after verification
        jsonwebtoken.verify(token, JWT_SECRET, async (err) => {
            if (err) {
                return res.json({ Error: err })
            } else {
                try {
                    // Hashing password            
                    const salt = await bcryptjs.genSalt(10);
                    const secPass = await bcryptjs.hash(password, salt);

                    let user = await Users.findByIdAndUpdate({ _id: id}, {password: secPass });
                    if (user) {
                        res.send({ Status: "Password Updated!!" })
                    }
                } catch (error) {
                    res.send({ Error: error })
                }
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// localhost:5000/api/auth/fetchuser --> Post request to login user   ..... No login required
router.post('/fetchuser', getuser, async (req, res) => {
    try {
        // Find the user id form the auth-token using the miidleware
        userid = req.user.id;

        // Fetch user details using the userid
        const user = await Users.findById(userid).select("-password");

        res.send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports = router;