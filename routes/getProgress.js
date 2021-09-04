const router = require("express").Router();           // Import expres router
const User = require("../models/User");               // Import Uer model aka get access to User Collection
const verify = require("./verifyToken");              // Import Verify Middleware to verify JWT
const resetHabits = require("./reset");               // Import resetHabits Middleware
var mongoose = require("mongoose");


router.post("/getProgress", verify, resetHabits,  async (req, res) => {


    try {
      const user = await User.findOne({ _id: req.user });
     

      let total = 0;
      let current = 0;

      for (let i = 0; i < user.habits.length; i++) {

          if(user.habits[i].Active === true) {
            total = total + parseInt(user.habits[i].TimesPer);
            current = current + parseInt(user.habits[i].Progress.UpdateCount);
          }
      }

 

      let percent = current / total;

      res.json(percent);
     

    } catch (err) {
      res.send(err).status(400);
    }
  
});

module.exports = router;