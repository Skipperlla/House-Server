const express = require("express");
const { register } = require('../controllers/user')
const router = express.Router();

router.get('/', register)


module.exports = router