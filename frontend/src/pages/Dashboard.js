import React, {useState, useEffect} from 'react';
import HabitBox from '../components/HabitBox';
import ProgressBox from '../components/ProgressBox';
import MotiBox from '../components/MotiBox';
import CalBox from '../components/CalBox';
import StatBox from '../components/StatBox';
import axios from 'axios';


function Dashboard() {

    const [verified, setVerified] = useState(0);


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
           

          

        }).catch(err =>  window.location.href = '/')
    } catch (err) {
        window.location.href = '/';
    }


       

    },[]);

    const goLogin = () => {

    }

    if(verified === 0) {
        return (
            <div></div>
        )
    }

    
    return (
        <div style={{ color: "black" }}>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
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
                        <ProgressBox />
                    </div>
                </div>
                <div className="row mx-auto justify-content-between align-items-center">
                    <div className="col-lg-9 col-md-12 col-sm-12  my-col">
                        <HabitBox />
                    </div>
                    
                    <div className="col-3 d-md-none d-sm-none d-lg-block my-col">
                        <MotiBox />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-12 my-col">
                        <StatBox />
                    </div>

                   
                    
                    <div className="col-lg-6 col-sm-12 my-col">
                        <CalBox />
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