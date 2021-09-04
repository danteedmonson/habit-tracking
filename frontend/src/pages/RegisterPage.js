import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import video from '../media/TheCall.mp4';
import backgroundOne from '../images/wallpaperflare.com_wallpaper1.png';





function RegisterPage() {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const register = () => {

        const loginInfo = JSON.stringify({
            email: email,
            password: password,
            name: firstName + " " + lastName
        })
        try {
            axios({

                method: 'post',
                url: 'http://localhost:5000/api/user/register',
                data: loginInfo,
                headers: {
                    'Content-Type': 'application/json'
                },

            }).then(res => {
                console.log(res.data);

            }).catch(err => setMessage(err.response.data))
        } catch (err) {
            setMessage(err.response.data)
        }


    }

    const goLogin = async event => {
        event.preventDefault();
        window.location.href = '/';
    }


    return (

        <>
            <div className="frostedBackground"></div>
            <div style={{ margin: "auto", padding: 10, marginTop: "3%" }}>


                <div className="container my-container mt-5 justify-content-end ">
                    <div className="row justify-content-end ">

                        <div className="col col-auto w3-animate-right" style={{ width: "55.55vh" }}>

                            <div className="row my-row justify-content-center align-items-start " >
                                <div className="col-md-6 col-sm-6 my-col">

                                </div>

                            </div>

                            <div className="row my-row justify-content-center align-items-center" style={{ height: "10.19vh" }} >
                                <div className="col-md-6 col-sm-6 my-col">
                                    <h4 className="text-center" style={{ fontFamily:"Courgette", fontSize: 25 }}>Register to Get Started!</h4>
                                </div>
                            </div>

                            <div className="row my-row justify-content-center align-items-center " >
                                <div className="col-md-8 col-sm-6 my-col">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name "  onChange={(c) => setFirstName(c.target.value)}/>


                                    </div>
                                </div>

                            </div>
                            <div className="row my-row justify-content-center align-items-center " >
                                <div className="col-md-8 col-sm-6 my-col">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name "  onChange={(c) => setLastName(c.target.value)}/>


                                    </div>
                                </div>

                            </div>
                            <div className="row my-row justify-content-center align-items-center " >
                                <div className="col-md-8 col-sm-6 my-col">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email " onChange={(c) => setEmail(c.target.value)} />


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
                                    <Button variant="secondary" size="lg" onClick={register} style={{ width: "100%" }} block>Register</Button>

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
                            <img width="120%" height="100%" style={{ objectFit: "cover", marginLeft: "0%", opacity: 1, borderRadius:10 }} src={backgroundOne} />
                               
                           

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}



export default RegisterPage;
