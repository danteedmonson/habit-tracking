import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import video from '../media/TheCall.mp4';





function RegisterPage() {

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

    const goLogin = async event => {
		event.preventDefault();
		window.location.href = '/';
	}


    return (

        <div style={{ margin: "auto", padding: 10, marginTop: "3%", width: "100%" }}>


            <div className="container my-container mt-5 justify-content-end">
                <div className="row justify-content-end ">
                    
                    <div className="col col-auto w3-animate-right" style={{ width: "55.55vh" }}>

                        <div className="row my-row justify-content-center align-items-center" style={{ height: "10.19vh" }} >
                            <div className="col-md-6 col-sm-6 my-col">
                                <h4 className="text-center" style={{ fontFamily: 'Bungee', fontSize: 25 }}>Register to Get Started!</h4>
                            </div>
                        </div>
                        <div className="row my-row justify-content-center align-items-center " >
					<div className="col-md-8 col-sm-6 my-col">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="First Name "  />


						</div>
					</div>

				</div>
				<div className="row my-row justify-content-center align-items-center " >
					<div className="col-md-8 col-sm-6 my-col">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Last Name "  />


						</div>
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
                                <Button variant="secondary" size="lg" onClick={login} block>Register</Button>

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

                        <div className="row my-row justify-content-center align-items-start " >
                            <div className="col-md-6 col-sm-6 my-col">
                                
                            </div>

                        </div>
                    </div>
                    <div className="col w3-animate-opacity" style={{ width: "68.35vh", backgroundColor: "#BAA1A7" }}>
                        <video width="120%" height="100%" style={{ objectFit: "cover", marginLeft: "-2.6%" }} autoPlay muted loop>
                            <source src={video} type="video/mp4" />
                        </video>

                    </div>

                </div>
            </div>
        </div>
    );
}



export default RegisterPage;
