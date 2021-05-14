const jwt = require("jsonwebtoken");
require('dotenv').config();
module.exports.auth = (req, res, next) => {
    //Get token from request
    const token = req.header('token');
    console.log('Hello token', token);
    if(!token){
        return res.json({status: 'error', msg :'You don\'t have any token'});
    } else {
     try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        next();
     } catch (error) {
      
        res.json({ status: 'error', msg: 'Token is not valid' });
     }
    }
}