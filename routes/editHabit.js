const router = require("express").Router(); // Import expres router
const User = require("../models/User"); // Import Uer model aka get access to User Collection
const verify = require("./verifyToken"); // Import Verify Middleware to verify JWT
const ObjectID = require("mongodb").ObjectID; // Import MongoDB Object ID

const { editValid } = require("../validation"); // Import the validation function

/*
This API deletes a Habit from the User's habits array
based on the habit
 */
router.post("/editHabit", verify, async (req, res) => {
  // deleteValid validates the request body and returns an error if there is one
  const error = editValid(req.body);

  if (error == undefined) {
    const newDesc = req.body.Description;
    const newColor = req.body.Color;
    const newTimesPer = req.body.TimesPer;
    const newOccur = req.body.Occurrence;

    try {
      const user = await User.findOne({ _id: req.user });

      let index = -1;
      for (let i = 0; i < user.habits.length; i++) {
        if (user.habits[i]._id.toString() === req.body._id.toString()) {
          index = i;
        }
      }

      const Progress = user.habits[index].Progress;

      let newPercent = Progress.UpdateCount < newTimesPer ? ((100 / newTimesPer) * Progress.UpdateCount) : 100;

      // Delete the habit from the database based on the habit ID
      await User.updateOne(
        {
          _id: req.user,
          "habits._id": ObjectID(req.body._id),
        },
        {
          $set: {
            "habits.$.Progress.Percent": newPercent,
            "habits.$.Progress.CurrDate": new Date(),
            "habits.$.Description": newDesc,
            "habits.$.Color": newColor,
            "habits.$.TimesPer": newTimesPer,
            "habits.$.Occurrence": newOccur,

            
            
          },
        }
      );
      const user = await User.findOne({ _id: req.user });

      res.json(user.habits);
    } catch (err) {
      res.send(err).status(400);
    }
  } else {
    res.send(error.details[0].message).status(400);
  }
});

module.exports = router;
