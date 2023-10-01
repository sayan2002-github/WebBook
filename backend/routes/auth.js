const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const { body, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const getuser = require('../middlleware/getuser')

const JWT_SECRET = 'shhh';

// localhost:5000/api/auth/createuser --> post request to create user   ..... No login required
router.post('/createuser', [
    body('name', 'Name must be atleast 3 characters long').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be 5 characters long' ).isLength({ min: 5 }),
],  async (req, res)=>{
    // If there are any error, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        // is there any duplicate email present
        let success = false;
        let user = await Users.findOne({email : req.body.email});
        if(user){
            return res.status(400).json({success, error : "This email already exists"})
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
                id : user.id
            }
        }
        const jwtoken = jsonwebtoken.sign(data, JWT_SECRET);

        // Send a response to the user with jwtoken
        success = true
        res.json({success, token : jwtoken});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// localhost:5000/api/auth/login --> get request to login user   ..... No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank' ).exists(),
],  async (req, res)=>{
    // If there are any error, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try {
        // Checking the user exists or not
        let success = false;
        let userName = 'Profile Name'
        let user = await Users.findOne({email});
        if(!user){
            return res.status(400).json({userName, success, error : "Invalid credentials"})
        }

        // Password checking
        const comparePassword = await bcryptjs.compare(password, user.password);
        if(!comparePassword){
            return res.status(400).json({userName, success, error : "Invalid credentials"})
        }

        // Creating a json web token
        const data = {
            user: {
                id : user.id
            }
        }
        const JWT_SECRET = 'shhh';
        const jwtoken = jsonwebtoken.sign(data, JWT_SECRET);

        // Send a response to the user with jwtoken
        userName = user.name;
        success = true;
        res.json({userName, success, token : jwtoken});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// localhost:5000/api/auth/fetchuser --> get request to login user   ..... No login required
router.post('/fetchuser', getuser,  async (req, res)=>{
    try {
        // Find the user id form the auth-token using the miidleware
        userid = req.user.id;

        // Fetch user details using the userid
        const user = await Users.findById(userid).select("-password");

        res.send({user});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports = router;