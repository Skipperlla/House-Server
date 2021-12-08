const expressAsyncHandler = require("express-async-handler")


const register = expressAsyncHandler(async (req, res, next) => {

    return res.status(200).json({ success: true })
});

module.exports = { register }