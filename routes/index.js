const app = require("express")();
const user = require('./user.js')
app.use("/User", user)

module.exports = app


