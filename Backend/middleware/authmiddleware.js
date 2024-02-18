const jwt = require('jsonwebtoken');
const User = require("../models/User");
require("dotenv").config();


const requireAuth = (req, res, next) => {
    const auth = req.headers.authorization || req.headers.Authorization;
    const token = auth.split(" ")[1];

    console.log(token);
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                res.status(401).json({
                    success: false,
                    message: "Login First1"
                })
            } else {

                req.user = await User.findById(decodedToken.id);
                next();
            }
        });
    } else {
        res.status(401).json({
            success: false,
            message: "Login First2"
        })
    }
};


module.exports = { requireAuth };

