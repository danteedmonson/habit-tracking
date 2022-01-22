import React, { useState, useEffect } from 'react';
import HabitBox from '../components/HabitBox';
import ProgressBox from '../components/ProgressBox';
import MotiBox from '../components/MotiBox';
import CalBox from '../components/CalBox';
import StatBox from '../components/StatBox';
import axios from 'axios';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button, Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import AppDrawer from '../components/AppDrawer';
import { Carousel } from 'react-responsive-carousel';
import { iconArr, Icons } from '../components/Icons';

const useStyles = makeStyles({
    paper: {
        background: 'rgba(66, 66, 66, 0.5)',
        color: 'white',
        marginTop: "3.37%",
        backdropFilter: "blur(10px)",

    }
});

function StatsPage() {



    const styles = useStyles();

    const [verified, setVerified] = useState(0);
    const [drawerState, setDrawerState] = useState(false);
    const [progReload, setProgReload] = useState(false);
    const [habits, setHabits] = useState([]);
    const [color, setColor] = useState();
    const [currentSlide, setCurrentSlide] = useState(0)




    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/pageVerify',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': jwt
            },
        }).then(res => {
            console.log(res.data);
            getHabits();
            // store the returned token into local storage
        }).catch(err => window.location.href = '/')




    }, []);

    function getHabits() {
        const jwt = localStorage.getItem('jwt');
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/getHabits',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': jwt
            },
        }).then(res => {
            setHabits(res.data);
            console.log(res.data);
            console.log("STATS PAGE")
            setVerified(1);
        }).catch(err => console.log("hello"))
    }


    if (verified === 0) {
        return (
            <div></div>
        )
    }
    return (
        <div style={{ color: "black", width: "100%" }}>
            <div className="frostedBackground"></div>
            <AppDrawer />
            <br></br>
            <br></br>
            <br></br>
            <div className="container" style={{ width: "100%" }}>


                <div className="row mx-auto justify-content-center align-items-center">
                    <div className="col-4 my-col">
                        <div className="dashBox" style={{ height: "18vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: habits[currentSlide].Color }}>
                            <h3 style={{ fontFamily: "Courgette" }}>Streak:</h3>
                            <h2 style={{ fontFamily: "Roboto" }}>{habits[currentSlide].CheckIns[habits[currentSlide].CheckIns.length - 1].Streak}</h2>
                        </div>

                    </div>
                    <div className="col-4 my-col">
                        <div className="dashBox" style={{ height: "18vh" }}>
                            <Carousel
                                infiniteLoop="true"
                                showThumbs="false"
                                showArrows="true"
                                onChange={index => setCurrentSlide(index)}>

                                {habits.map((habit, index) => {
                                    return (
                                        <div key={index} style={{ height: "18vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <div style={{ height: "12vh", width: "12vh" }}>

                                                <Icons color={habit.Color} icon={habit.Icon} />
                                                <div style={{ marginTop: "-17%", fontFamily: "Roboto", color: habit.Color }}>{habit.HabitName}</div>
                                            </div>
                                        </div>
                                    )

                                })}
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-4 my-col">
                        <div className="dashBox" style={{ height: "18vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: habits[currentSlide].Color }}>
                            <h3 style={{ fontFamily: "Courgette" }}>Longest Streak:</h3>
                            <h2 style={{ fontFamily: "Roboto" }}>{habits[currentSlide].CheckIns[habits[currentSlide].CheckIns.length - 1].LongestStreak}</h2>

                        </div>

                    </div>
                </div>



                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-12 my-col" style={{ height: "120%" }}>
                        <StatBox GraphType="bar" Color={habits[currentSlide].Color} Checkins={habits[currentSlide].CheckIns} noTitle={true} />
                    </div>



                    <div className="col-lg-6 col-sm-12 my-col">
                        <StatBox GraphType="line" Color={habits[currentSlide].Color} Checkins={habits[currentSlide].CheckIns} noTitle={true} />
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}

export default StatsPage;