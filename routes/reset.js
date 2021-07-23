const router = require("express").Router();
const User = require("../models/User");
const verify = require("./verifyToken");
var mongoose = require("mongoose");

async function resetHabits(req, res, next) {

    const weekday = {
        0: "Sun",
        1: "Mon",
        2: "Tues",
        3: "Wed",
        4: "Thurs",
        5: "Fri",
        6: "Sat",
    };

    const date = new Date();

    try {

        const user = await User.findOne({ _id: req.user });

        for (let i = 0; i < user.habits.length; i++) {

           let activateDay = user.habits[i].Occurrence[weekday[date.getDay()]];
           user.habits[i].Active = activateDay

            if (user.habits[i].Progress.CurrDate != null) {

                if (
                    !(
                        user.habits[i].Progress.CurrDate.getDate() == date.getDate() &&
                        user.habits[i].Progress.CurrDate.getMonth() == date.getMonth() &&
                        user.habits[i].Progress.CurrDate.getFullYear() == date.getFullYear()
                    )
                ) {
                    user.habits[i].Progress.Percent = 0;
                    user.habits[i].Progress.UpdateCount = 0;
                }

                if (
                    !(
                        user.habits[i].CheckIns[
                            user.habits[i].CheckIns.length - 1
                        ].CurrDate.getDate() == date.getDate() &&
                        user.habits[i].CheckIns[
                            user.habits[i].CheckIns.length - 1
                        ].CurrDate.getMonth() == date.getMonth() &&
                        user.habits[i].CheckIns[
                            user.habits[i].CheckIns.length - 1
                        ].CurrDate.getFullYear() == date.getFullYear()
                    )
                ) {
                    

                    // const currentDay = weekday[date.getDay()]

                    let lastDate = new Date();
                    if (user.habits[i].CheckIns.length != 1)
                        for (let j = 1; j < 8; j++)

                            if (
                                user.habits[i].Occurrence[weekday[(date.getDay() - j) % 7]] ==
                                true
                            ) {
                                lastDate.setDate(date.getDate() - j);


                                if (
                                    !(
                                        user.habits[i].CheckIns[
                                            user.habits[i].CheckIns.length - 1
                                        ].CurrDate.getDate() == lastDate.getDate() &&
                                        user.habits[i].CheckIns[
                                            user.habits[i].CheckIns.length - 1
                                        ].CurrDate.getMonth() == lastDate.getMonth() &&
                                        user.habits[i].CheckIns[
                                            user.habits[i].CheckIns.length - 1
                                        ].CurrDate.getFullYear() == lastDate.getFullYear()
                                    )
                                ) {
                                    user.habits[i].CheckIns.push({
                                        Streak: 0,
                                        LongestStreak:
                                            user.habits[i].CheckIns[user.habits[i].CheckIns.length - 1]
                                                .LongestStreak,
                                        CurrDate: new Date(),
                                    });
                                }

                                break;
                            }
                }
            }
        }



        try {
            await User.updateOne(
                {
                    _id: req.user,
                },
                {
                    $set: {
                        habits: user.habits,
                    },
                }
            );

            next();
        } catch (err) {
            res.send(err).status(400);
        }
    } catch (err) {
        res.send(err).status(400);
    }
}

module.exports = resetHabits;
