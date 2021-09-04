import React, { useState, useEffect } from 'react';
import HabitBox from '../components/HabitBox';
import ProgressBox from '../components/ProgressBox';
import MotiBox from '../components/MotiBox';
import CalBox from '../components/CalBox';
import StatBox from '../components/StatBox';
import axios from 'axios';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button, Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import AppDrawer from '../components/AppDrawer';

const useStyles = makeStyles({
    paper: {
        background: 'rgba(66, 66, 66, 0.5)',
        color: 'white',
        marginTop:"3.37%",
        backdropFilter: "blur(10px)",
 
    }
});

function StatsPage() {

    const styles = useStyles();

    const [verified, setVerified] = useState(0);
    const [drawerState, setDrawerState] = useState(false);
    const [progReload, setProgReload] = useState(false);

    const progRerender = () => {
        if (progReload === false){
            setProgReload(true);
            console.log("DASHBOARD REREND STATE CHANGE");
        }
        else{
            setProgReload(false);
            console.log("DASHBOARD REREND STATE CHANGE");
        }
    };


    useEffect(() => {
        const jwt = localStorage.getItem('jwt');

        try {
            axios({

                method: 'post',
                url: 'http://localhost:5000/api/pageVerify',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': jwt
                },

            }).then(res => {
                console.log(res.data);
                setVerified(1);
                // store the returned token into local storage




            }).catch(err => window.location.href = '/')
        } catch (err) {
            window.location.href = '/';
        }




    }, []);

    const goLogin = () => {

    }

    if (verified === 0) {
        return (
            <div></div>
        )
    }




    return (
        <div style={{ color: "black", width:"100%" }}>
            <AppDrawer/>
            <br></br>
            <br></br>
            <br></br>
            <div className="container" style={{width:"100%"}}>
                        {/* <div className="row">
                            <div className="col">
                            <ProgressBox />
                            </div>
                        </div>
                        <div className="row">
                            <HabitBox />
                        </div>

                    </div> */}

                <div className="row mx-auto justify-content-center align-items-center">
                    <div className="col-12 my-col">
                        <ProgressBox rerend={progReload}/>
                    </div>
                </div>
               
                
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-12 my-col" style={{height:"120%"}}>
                        <StatBox />
                    </div>



                    <div className="col-lg-6 col-sm-12 my-col">
                    <StatBox />
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