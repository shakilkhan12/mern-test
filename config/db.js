const mongoose = require("mongoose");
require('dotenv').config()
module.exports = connect = async () => {
    try {
        const response = mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('db Connected'); 
    } catch (error) {
       console.log(error) 
    }
}