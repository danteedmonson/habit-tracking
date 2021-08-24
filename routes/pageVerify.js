const router = require("express").Router();           // Import expres router
const jwt = require("jsonwebtoken");
const User = require("../models/User");
        

router.post("/pageVerify",  async (req, res) => {


    const token = req.header('auth-token');

    if (!token) {
        return res.status(401).send('Access Denied');
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;


        const userExist = await User.findById(verified._id)

        if (userExist)
            res.send("verified");
        else
            res.send("Invalid Token")

        

    }catch(err) {
        res.status(400).send("Invalid Token");

    }
});

module.exports = router;