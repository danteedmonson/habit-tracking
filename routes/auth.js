const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv")

// // read the .env file for the enviromental variables
// dotenv.config();

// import the validation functions
const { registerValid, loginValid } = require("../validation");

router.post("/register",  async (req, res) => {
  //Validate Data before making a User
  const error = registerValid(req.body);

  if (error === undefined) {
    //Check if user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });

    if (emailExist) {
      return res.send("Email already Exist").status(400);
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // If there is no error, create a new user

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.send(error.details[0].message).status(400);
  }
});

router.post("/login", async (req, res) => {
  const error = loginValid(req.body);
  

  if (error === undefined) {
    //Check if user is already in the database
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send("Email or Password Incorrect").status(400);
    }

    const validPass = await bcrypt.compare(req.body.password, user.password )

    if (!validPass) {
      return res.send("Email or Password Incorrect").status(400);
    }


    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);

   
  } else {
    res.send(error.details[0].message).status(400);
  }
});

module.exports = router;
