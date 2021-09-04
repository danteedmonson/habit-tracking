const router = require("express").Router();
const User = require("../models/User");
const verify = require("./verifyToken");
var mongoose = require("mongoose");
const { addCheckin, undoCheckin } = require("../models/updateCheckin");
const { deleteValid } = require("../validation");

const ObjectID = require("mongodb").ObjectID;

router.post("/updatePercent", verify, async (req, res) => {
  try {
    const error = deleteValid(req.body);
    if (error != undefined)
      return res.send(error.details[0].message).status(400);

    const user = await User.findOne({ _id: req.user });

    let index = -1;
    for (let i = 0; i < user.habits.length; i++) {
      if (user.habits[i]._id.toString() === req.body._id.toString()) {
        index = i;
      }
    }

    if (index == -1) return res.send("Habit not found").status(404);

    const Percent = user.habits[index].Progress.Percent;
    const TimesPer = user.habits[index].TimesPer;
    const CheckIns = user.habits[index].CheckIns;
    const Active = user.habits[index].Active;
    const UpdateCount = user.habits[index].Progress.UpdateCount;
    let newPercent = Percent;
    let newCount = UpdateCount;
    if (Percent < 100 && Active) {
      newPercent = 100 / TimesPer + Percent;
      newCount++;
    }
    if (newPercent == 100 && Active) addCheckin(CheckIns);

    try {
      await User.updateOne(
        {
          _id: req.user,
          "habits._id": ObjectID(req.body._id),
        },
        {
          $set: {
            "habits.$.Progress.Percent": newPercent,
            "habits.$.Progress.CurrDate": new Date(),
            "habits.$.CheckIns": CheckIns,
            "habits.$.Progress.UpdateCount": newCount,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    console.log(newPercent);

    const temp = await User.findOne({ _id: req.user });

    res.json(temp.habits[index]);
  } catch (err) {
    res.send(err).status(400);
  }
});

router.post("/undoPercent", verify, async (req, res) => {
  const error = deleteValid(req.body);
  if (error != undefined) return res.send(error.details[0].message).status(400);

  try {
    const user = await User.findOne({ _id: req.user });

    let index = -1;
    for (let i = 0; i < user.habits.length; i++) {
      if (user.habits[i]._id.toString() === req.body._id.toString()) {
        index = i;
      }
    }

    if (index == -1) return res.send("Habit not found").status(404);

    const Percent = user.habits[index].Progress.Percent;
    const TimesPer = user.habits[index].TimesPer;
    const CheckIns = user.habits[index].CheckIns;
    const Active = user.habits[index].Active;
    const UpdateCount = user.habits[index].Progress.UpdateCount;
    let newPercent = Percent;
    let newCount = UpdateCount;

    if (Percent < 100 && Percent > 0 && Active) {
      newPercent = Percent - 100 / TimesPer;
      newCount--;
    }
    if (newPercent == 100 && Active) {
      undoCheckin(CheckIns);
      newPercent = Percent - 100 / TimesPer;
      newCount--;
    }

    try {
      await User.updateOne(
        {
          _id: req.user,
          "habits._id": ObjectID(req.body._id),
        },
        {
          $set: {
            "habits.$.Progress.Percent": newPercent,
            "habits.$.Progress.CurrDate": new Date(),
            "habits.$.CheckIns": CheckIns,
            "habits.$.Progress.UpdateCount": newCount,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    console.log(newPercent);

    const temp = await User.findOne({ _id: req.user });

    res.json(temp.habits[index]);
  } catch (err) {
    res.send(err).status(400);
  }
});

router.post("/getStreak", verify, async (req, res) => {
  try {
    const error = deleteValid(req.body);
    if (error != undefined)
      return res.send(error.details[0].message).status(400);

    const user = await User.findOne({ _id: req.user });

    let index = -1;
    for (let i = 0; i < user.habits.length; i++) {
      if (user.habits[i]._id.toString() === req.body._id.toString()) {
        index = i;
      }
    }

    if (index == -1) return res.send("Habit not found").status(404);


    const CheckIns = user.habits[index].CheckIns;

    const Streak = CheckIns[CheckIns.length - 1].Streak;
    const LongestStreak = CheckIns[CheckIns.length - 1].LongestStreak;

    const streakData = {
      Streak,
      LongestStreak
    }



    res.json(streakData);
  } catch (err) {
    res.send(err).status(400);
  }
});

module.exports = router;
