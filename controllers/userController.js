
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require("bcrypt");
const User = require("../models/User")
module.exports.registerValidations = [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').not().isEmpty().withMessage('Email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long.'),
];
module.exports.userRegister = async (req, res) => {
       const {name, email, password} = req.body;
       const errors = validationResult(req);
     if (!errors.isEmpty()) {
    return res.json({ status: 'errors', errors: errors.array() });
  } else {
    const checkUser = await User.findOne({email});
    if(checkUser){
      return res.status(401).json({status: 'errors', errors: [{msg: 'Email is already exist', param: 'email'}]});
      // res.status(401).json({})
    } else {
      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(password, salt)
      const response = await User.create({
        name,
        email,
        password: hashed
      });
      const token = jwt.sign({ user: response }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
      return res.status(200).json({status: 'success', token, user: response});
    }
  }
}
module.exports.loginValidations = [
  body('email').not().isEmpty().withMessage('Email is requied'),
  body('password').not().isEmpty().withMessage('Password is requied'),
];
module.exports.userLogin = async (req, res) => {
  const {email, password} = req.body;
  const errors = validationResult(req);
     if (!errors.isEmpty()) {
      return res.json({ status: 'errors', errors: errors.array() });
     } else {
       const checkEmail = await User.findOne({email});
       if(checkEmail){
          const matched = await bcrypt.compare(password, checkEmail.password);
          console.log(checkEmail);
          if(matched){
            const token = jwt.sign({ user: checkEmail }, process.env.JWT_SECRET, {
              expiresIn: "7d"
          })
            return res.status(200).json({status: 'success', token, user: checkEmail});
          } else {
            return res.json({status: 'errors', errors: [{msg: 'Please enter valid password', param: 'password'}]});
          }
       } else {
        return res.json({status: 'errors',errors: [{msg: 'Please enter valid email', param: 'email'}]});
       }
     }

}