import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
//import Button from 'react-bootstrap/esm/Button';
import { Button } from '@material-ui/core';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import video from '../media/into-the-valley.mp4';
import backgroundTwo from '../images/wallpaperflare.com_wallpaper2.png';
import TextField from '@material-ui/core/TextField';





function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
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
             window.location.href = '/dashboard';
             // store the returned token into local storage
            
 
           
 
         }).catch(err =>  setVerified(2))
     } catch (err) {
        setVerified(2);
     }
 
 
        
 
     },[]);


    const login = () => {

        const loginInfo = JSON.stringify({
            email: username,
            password: password
        })
        try {
            axios({

                method: 'post',
                url: 'http://localhost:5000/api/user/login',
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

            }).catch(err => setMessage(err.response.data))
        } catch (err) {
            setMessage(err.response.data)
        }


    }

    const goRegister = async event => {
        event.preventDefault();
        window.location.href = '/Register';
    }

    const goDashboard = () => {
        window.location.href = '/Dashboard';
    }

    if(verified === 0 || verified === 1) {
        return (
            <div></div>
        )
    }

    return (

        <div style={{ margin: "auto", padding: 10, marginTop: "3%" }} className="auth-container">


            <div className="container my-container mt-5 justify-content-end ">
                <div className="row justify-content-end  ">
                  

                    <div className="col  w3-animate-opacity" style={{ width: "68.35vh", }}>
                            <img width="100%" height="100%" style={{ objectFit: "cover", marginLeft: "-2.6%", opacity: 1, borderRadius:10 }} src={backgroundTwo} />
                               
                           

                        </div>
                    <div className="col col-auto  w3-animate-left" style={{ width: "55.55vh" }}>

                        <div className="row my-row justify-content-center align-items-center" style={{ height: "10.19vh" }} >
                            <div className="col-md-6 col-sm-6 my-col">
                                <h4 className="text-center" style={{ fontFamily:"Courgette", fontSize: 25 }}>Login to Get Started!</h4>
                            </div>
                        </div>
                        <div className="row my-row  align-items-center justify-content-center" style={{ height: "14.8vh" }}>
                            <div className="" style={{ width: 110, height: 110, padding: 0 }} >
                                
<Checkmark size='108px' color="#797B84" />

                            </div>

                        </div>
                        <div className="row my-row justify-content-center align-items-center " >
                            <div className="col-md-8 col-sm-6 my-col">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email " onChange={(c) => setUsername(c.target.value)} />
                                   


                                </div>
                            </div>

                        </div>
                        <div className="row my-row justify-content-center align-items-center ">
                            <div className="col-md-8 col-sm-6 my-col">
                                <div className="form-group">

                                    <input type="password" className="form-control" placeholder="Password" onChange={(c) => setPassword(c.target.value)} />

                                </div>
                            </div>

                        </div>
                        <div className="row my-row justify-content-center align-items-center ">
                            <div className="col-5 col my-col col-auto">
                                <Button variant="contained" size="large" onClick={login} style={{ width: "100%" }} block>Login</Button>

                                <span id="loginResult"><p>{message}</p></span>
                            </div>


                        </div>
                        <div className="row my-row justify-content-center align-items-end " style={{ height: "6.5vh" }} >
                            <div className="col-md-6 col-sm-6 my-col">
                                <h6 className="text-center" style={{ cursor: "pointer", fontFamily: 'Roboto' }} onClick={goRegister}><a>New User? Register Here</a></h6>
                            </div>



                        </div>
                        <div className="row my-row justify-content-center align-items-start " >
                            <div className="col-md-6 col-sm-6 my-col">
                                <h6 className="text-center" style={{ cursor: "pointer", fontFamily: 'Roboto' }}><a>Need Help? Click Here</a></h6>
                            </div>

                        </div>

                        <div className="row my-row justify-content-center align-items-start " >
                            <div className="col-md-6 col-sm-6 my-col">
                                <h6 className="text-center" style={{ cursor: "pointer", fontFamily: 'Roboto' }}><a>Resend Verification</a></h6>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}



export default LoginPage;
