const router = require("express").Router();
const User = require("../models/User");
const verify = require("./verifyToken");
var mongoose = require("mongoose");
const { habitValid } = require("../validation");
/*
 This API adds a habit to the User's habit array in the 
 database 
 */
router.post("/addHabit", verify, async (req, res) => {
  
  // habitValid validates the request body and returns an error if there is one
  const error = habitValid(req.body);

  // if there is no error with validation, proceed
  if (error === undefined) {
    // generate a unique object ID for the new habit
    var habitID = mongoose.Types.ObjectId();

    // place the properties, in the request body, in an object for the new habit
    // Also add the Progress Object and the CheckIns array to this object
    const newHab = {
      _id: habitID,
      HabitName: req.body.HabitName,
      Description: req.body.Description,
      Icon: req.body.Icon,
      Color: req.body.Color,
      Occurrence: req.body.Occurrence,
      TimesPer: req.body.TimesPer,
      Active: null,
      Progress: {
        Percent: 0,
        CurrDate: null,
        UpdateCount: 0
      },
      CheckIns: [
        {
          Streak: 0,
          LongestStreak: 0,
          CurrDate: new Date()
        }
      ],
    };

    // push the new habit to the habits array for the user
    try {
      await User.updateOne({ _id: req.user }, { $push: { habits: newHab } });
      const user = await User.findOne({ _id: req.user });

      res.json({
        message: user.email + " is verified to add habits",
        habits: user.habits,
      });
    } catch (err) {
      // response if database querying fails
      res.send(error).status(400);
    }
  } else {
    // response if habit validation returns an error
    res.send(error.details[0].message).status(400);
  }
});

module.exports = router;
