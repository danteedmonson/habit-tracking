import React, { useState, useEffect, useContext } from 'react';
import HabitBox from '../components/HabitBox';
import ProgressBox from '../components/ProgressBox';
import MotiBox from '../components/MotiBox';
import CalBox from '../components/CalBox';
import StatBox from '../components/StatBox';
import axios from 'axios';
import AppDrawer from '../components/AppDrawer';
import { useNavigate } from "react-router";
import {DevContext} from '../App'



function Dashboard() {

    const url = useContext(DevContext)

    const [verified, setVerified] = useState(0);
    const [progReload, setProgReload] = useState(false);
    const [completeDay, setCompleteDay] = useState([])
    const navigate = useNavigate();
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

        
            axios({

                method: 'post',
                url: `${url}/pageVerify`,
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': jwt
                },

            }).then(res => {
                console.log(res.data);
                setVerified(1);
                // store the returned token into local storage
            }).catch(err => navigate("../", { replace: true }))
       
    }, []);



    if (verified === 0) {
        return (
            <div></div>
        )
    }

    return (
        <div style={{ color: "black", width:"70%", userSelect: "none" }}>
            <AppDrawer/>
            <br></br>
            <br></br>
            <br></br>
            <div className="container" style={{width:"100%"}}>
            

                <div className="row mx-auto justify-content-center align-items-center">
                    <div className="col-12 my-col">
                        <ProgressBox rerend={progReload} setCompleteDay={setCompleteDay}/>
                    </div>
                </div>
                <div className="row mx-auto justify-content-between align-items-center">
                    <div className="col-lg-9 col-md-12 col-sm-12  my-col">
                        <HabitBox progRerender={progRerender}/>
                    </div>

                    <div className="col-3 d-md-none d-sm-none d-lg-block my-col">
                        <MotiBox />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-12 my-col">
                        <StatBox GraphType="bar" Checkins={completeDay} dash={true}/>
                    </div>



                    <div className="col-lg-6 col-sm-12 my-col">
                        <CalBox Checkins={completeDay} dash={true}/>
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}

export default Dashboard;