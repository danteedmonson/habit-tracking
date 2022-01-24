import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
//import Button from 'react-bootstrap/esm/Button';
import { Button } from '@material-ui/core';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import video from '../media/into-the-valley.mp4';
import backgroundTwo from '../images/wallpaperflare.com_wallpaper2.png';
import TextField from '@material-ui/core/TextField';
import { useNavigate } from "react-router";
import {DevContext} from '../App'






function LoginPage() {

    const url = useContext(DevContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [verified, setVerified] = useState(0);
    const navigate = useNavigate();


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
            window.location.href = '/dashboard';
            // store the returned token into local storage




        }).catch(err => setVerified(2))





    }, []);


    const login = () => {

        const loginInfo = JSON.stringify({
            email: username,
            password: password
        })
        try {
            axios({

                method: 'post',
                url: `${url}/user/login`,
                data: loginInfo,
                headers: {
                    'Content-Type': 'application/json'
                },

            }).then(res => {
                console.log(res.data + "YOOOO");
                // store the returned token into local storage
                const jwt = res.data;

                localStorage.setItem('jwt', jwt);
                goDashboard();

            }).catch(err => console.log(err))
        } catch (err) {
            setMessage(err.response.data)
        }


    }

    const goRegister = async event => {
        event.preventDefault();
        navigate("../register", { replace: true });
    }

    const goDashboard = () => {
        window.location.href = '/Dashboard';
    }

    if (verified === 0 || verified === 1) {
        return (
            <div></div>
        )
    }

    return (

        <div style={{ margin: "auto", padding: 10, marginTop: "3%" }} >


            <div className="container my-container mt-5 justify-content-end ">
                <div className="row justify-content-end" style={{height:"100%"}}>


                    <div className="col  w3-animate-opacity" style={{ width: "68.35vh", }}>
                        <img width="100%" height="100%" alt="" style={{ objectFit: "cover", marginLeft: "-3.6%", opacity: 1, borderRadius: 5 }} src={backgroundTwo} />



                    </div>
                    <div className="col col-auto  w3-animate-left" style={{ width: "55.55vh", }}>
                        <h4 className="text-center" style={{ fontFamily: "Courgette", fontSize: 19, marginTop: 7.5 }}>Login to Get Started!</h4>


                        <div style={{ width: "100%", height: 100, marginTop: 10 }} >

                            <Checkmark size='60px' color="#797B84" />

                        </div>


                        <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between", flexDirection: "column", marginTop: 15, height:100 }} >

                            <input style={{ width:"70%"}} className="form-control" type="text" placeholder="Email" variant="outlined" onChange={(c) => setUsername(c.target.value)} margin="normal" size="small" />

                            <input style={{ width:"70%"}}   className="form-control" type="password" placeholder="Password" variant="outlined" onChange={(c) => setPassword(c.target.value)} size="small" />




                        </div>


                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: 15 }}>
                            <Button variant="contained" size="large" onClick={login} block>Login</Button>

                            <span id="loginResult"><p>{message}</p></span>

                            <h6 style={{ cursor: "pointer", fontFamily: 'Roboto' }} onClick={goRegister}>New User? Register Here</h6>
                        </div>












                    </div>

                </div>
            </div>
        </div>
    );
}



export default LoginPage;
