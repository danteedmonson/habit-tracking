import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import video from '../media/TheCall.mp4';
import backgroundOne from '../images/wallpaperflare.com_wallpaper1.png';
import { useNavigate } from "react-router";
import {DevContext} from '../App'





function RegisterPage(props) {

    const url = useContext(DevContext)
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
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
            goDashboard();
            // store the returned token into local storage
        }).catch(err => console.log(err))
    }, []);

    const register = () => {

        const loginInfo = JSON.stringify({
            email: email,
            password: password,
            name: firstName + " " + lastName
        })
            axios({
                method: 'post',
                url: `${url}/user/register`,
                data: loginInfo,
                headers: {
                    'Content-Type': 'application/json'
                },

            }).then(res => {
                console.log(res.data);
                login();

            }).catch(err => setMessage(err.response.data))
    }

    const login = () => {

        const loginInfo = JSON.stringify({
            email: email,
            password: password
        })
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
            }).catch(err => setMessage(err.response.data))
    }

    const goLogin = async event => {
        event.preventDefault();
        navigate("../", { replace: true });
    }

    const goDashboard = () => {
        navigate("../dashboard", { replace: true });
    }


    if (!props.isMobile)
    return (

        <>
            <div className="frostedBackground"></div>
            <div style={{ margin: "auto", padding: 10, marginTop: "3%" }}>


                <div className="container my-container mt-5 justify-content-end ">
                    <div className="row justify-content-end " style={{height:"100%"}}>

                        <div className="col col-auto w3-animate-right" style={{ width: "55.55vh" }}>

                        <h4 className="text-center" style={{ fontFamily: "Courgette", fontSize: 19, marginTop: 7.5, marginBottom:30 }}>Register to Get Started!</h4>
 

                            <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between", flexDirection: "column", marginTop: 15, height:200, marginBottom:30 }} >
                            <input style={{ width:"70%"}} className="form-control" type="text" placeholder="First Name" variant="outlined" onChange={(c) => setFirstName(c.target.value)} margin="normal" size="small" />
                            <input style={{ width:"70%"}} className="form-control" type="text" placeholder="Last Name" variant="outlined" onChange={(c) => setLastName(c.target.value)} margin="normal" size="small" />
                            <input style={{ width:"70%"}} className="form-control" type="text" placeholder="Email" variant="outlined"  autoComplete="off" onChange={(c) => setEmail(c.target.value)} margin="normal" size="small" />
                            <input style={{ width:"70%"}}   className="form-control" type="password" placeholder="Password" variant="outlined" autoComplete="off" onChange={(c) => setPassword(c.target.value)} size="small" />
                        </div>
                            <div className="row my-row justify-content-center align-items-center ">
                                <div className="col-5 col my-col col-auto">
                                    <Button variant="contained" size="lg" onClick={register} style={{ width: "100%" }} block>Register</Button>

                                    <span id="loginResult"><p>{message}</p></span>
                                </div>


                            </div>
                            <div className="row my-row justify-content-center align-items-end " style={{ height: "6.5vh" }} >
                                <div className="col-md-6 col-sm-6 my-col">
                                    <h6 className="text-center" style={{ cursor: "pointer", fontFamily: 'Roboto' }} onClick={goLogin}><a>Have an Account? Login Here</a></h6>
                                </div>



                            </div>
                            <div className="row my-row justify-content-center align-items-start " >
                                <div className="col-md-6 col-sm-6 my-col">

                                </div>

                            </div>


                        </div>
                        <div className="col  w3-animate-opacity" style={{ width: "68.35vh", padding:"-11.25px" }}>
                            <img width="120%" height="100%" alt="" style={{ objectFit: "cover", marginLeft: "0%", opacity: 1, borderRadius:10 }} src={backgroundOne} />
                               
                           

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
    else
    return (
       


       
       

                <div className="col col-auto w3-animate-right" style={{ width: "95%" }}>

                <h4 className="text-center" style={{ fontFamily: "Courgette", fontSize: 19, marginTop: 7.5, marginBottom:30 }}>Register to Get Started!</h4>


                    <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between", flexDirection: "column", marginTop: 15, height:200, marginBottom:30 }} >
                    <input style={{ width:"70%"}} className="form-control" type="text" placeholder="First Name" variant="outlined" onChange={(c) => setFirstName(c.target.value)} margin="normal" size="small" />
                    <input style={{ width:"70%"}} className="form-control" type="text" placeholder="Last Name" variant="outlined" onChange={(c) => setLastName(c.target.value)} margin="normal" size="small" />
                    <input style={{ width:"70%"}} className="form-control" type="text" placeholder="Email" variant="outlined"  autoComplete="off" onChange={(c) => setEmail(c.target.value)} margin="normal" size="small" />
                    <input style={{ width:"70%"}}   className="form-control" type="password" placeholder="Password" variant="outlined" autoComplete="off" onChange={(c) => setPassword(c.target.value)} size="small" />
                </div>
                    <div className="row my-row justify-content-center align-items-center ">
                        <div className="col-5 col my-col col-auto">
                            <Button variant="contained" size="lg" onClick={register} style={{ width: "100%" }} block>Register</Button>

                            <span id="loginResult"><p>{message}</p></span>
                        </div>


                    </div>
                    <div className="row my-row justify-content-center align-items-end " style={{ height: "6.5vh" }} >
                        <div className="col-md-6 col-sm-6 my-col">
                            <h6 className="text-center" style={{ cursor: "pointer", fontFamily: 'Roboto' }} onClick={goLogin}><a>Have an Account? Login Here</a></h6>
                        </div>



                    </div>
                    <div className="row my-row justify-content-center align-items-start " >
                        <div className="col-md-6 col-sm-6 my-col">

                        </div>

                    </div>


                </div>

       


    )

}



export default RegisterPage;
