const express = require("express");
const router = express.Router();
const {userRegister,registerValidations, loginValidations, userLogin} = require("../controllers/userController");
router.post('/register',registerValidations, userRegister);
router.post('/login', loginValidations, userLogin);
module.exports = router;