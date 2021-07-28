import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import video from '../media/into-the-valley.mp4';





function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

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

            }).catch(err => setMessage(err.response.data))
        } catch (err) {
            setMessage(err.response.data)
        }


    }

    const goRegister = async event => {
		event.preventDefault();
		window.location.href = '/Register';
	}


    return (

        <div style={{ margin: "auto", padding: 10, marginTop: "3%" }} className="auth-container">


            <div className="container my-container mt-5 justify-content-end ">
                <div className="row justify-content-end  ">
                    <div className="col w3-animate-opacity" style={{width: "68.35vh", backgroundColor:"#BAA1A7"}}>
                    <video width="120%" height="100%" style={{objectFit: "cover", marginLeft: "-2.6%", opacity:0.5}} autoPlay muted loop>
                        <source src={video} type="video/mp4"/>
                    </video>

                    </div>
                    <div className="col col-auto  w3-animate-left" style={{width: "55.55vh"}}>

                        <div className="row my-row justify-content-center align-items-center" style={{ height: "10.19vh" }} >
                            <div className="col-md-6 col-sm-6 my-col">
                                <h4 className="text-center" style={{ fontFamily: 'Bungee', fontSize: 25 }}>Login to Get Started!</h4>
                            </div>
                        </div>
                        <div className="row my-row  align-items-center justify-content-center" style={{ height: "14.8vh" }}>
                            <div className="" style={{ width: 110, height: 110, padding: 0 }} >
                                <CircularProgressbarWithChildren
                                    value="100"
                                    background="true"
                                    styles={buildStyles({

                                        pathColor: "#797B84",
                                        textColor: '#DBABBE',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#BAA1A7',

                                    })}
                                >



                                    <Checkmark size='108px' color="#797B84" />

                                </CircularProgressbarWithChildren>

                            </div>

                        </div>
                        <div className="row my-row justify-content-center align-items-center " >
                            <div className="col-md-8 col-sm-6 my-col">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username " onChange={(c) => setUsername(c.target.value)} />


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
                                <Button variant="secondary" size="lg" onClick={login} style={{width:"100%"}} block>Login</Button>
                              
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
