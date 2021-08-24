import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import IconsArr from './Icons';
import axios from 'axios';



//import axios from 'axios';



function AddModal(props) {

    const [color, setColor] = useState("");
    const [habitName, setHabitName] = useState('');
    const [desc, setDesc] = useState("");
    const [occur, setOccur] = useState("");
    const [amount, setAmount] = useState("");
    const [icon, setIcon] = useState(-1);
    const [enableNext, setEnableNext] = useState(true)
    const [enableSave, setEnableSave] = useState(true)

    const [mon, setMon] = useState(false);
    const [tues, setTues] = useState(false);
    const [wed, setWed] = useState(false);
    const [thurs, setThurs] = useState(false);
    const [fri, setFri] = useState(false);
    const [sat, setSat] = useState(false);
    const [sun, setSun] = useState(false);


    const [showIcons, setShowIcons] = useState(true);
    let date = new Date();
    const occ = { mon, tues, wed, thurs, fri, sat, sun }


    //   const bp = require('./bp.js');
    //   const storage = require('../tokenStorage.js');
    //   const jwt = require("jsonwebtoken");

    var card = '';
    var search = '';

    const [message, setMessage] = useState('');






    useEffect(() => {

        console.log(color)
        if (color !== "" && habitName !== "" && desc !== "" && amount !== "" &&
            (mon !== false || tues !== false || wed !== false || thurs !== false || fri !== false || sat !== false || sun !== false)) {
            setEnableNext(false)

            if (icon !== -1) {
                setEnableSave(false)
            }

        }
        else {
            setEnableNext(true)

        }


    })

    const addHabit =  () => {

        const jwt = localStorage.getItem('jwt');

        const habitData = JSON.stringify({
            "HabitName": habitName,
            "Description": desc,
            "Icon": icon,
            "Color": color,
            "Occurrence": {
                "Mon": mon,
                "Tues": tues,
                "Wed": wed,
                "Thurs": thurs,
                "Fri": fri,
                "Sat": sat,
                "Sun": sun
            },
            "TimesPer": amount
         }
         )

        try {
            axios({

                method: 'post',
                url: 'http://localhost:5000/api/addHabit',
                data: habitData,
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': jwt
                },

            }).then(res => {
                console.log(res.data);

                props.rerender()

                setTimeout(() => {
                    closeModal();
                  }, 300);
              
             




            }).catch(err => console.log("hello"))
        } catch (err) {

        }
    }


    const closeModal = async event => {
        setColor("");
        setHabitName("");
        setDesc("");
        setAmount("");
        setOccur("");
        setIcon(-1);

        props.onHide();
        setEnableNext(true)
        setEnableSave(true)


        setTimeout(() => {
            setShowIcons(true);
        }, 300);

    }



    useEffect(() => console.log(occ), [occ])



    return (
        <Modal

            scrollable
            backdrop='static'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header
                style=
                {
                    {
                        backgroundColor: "#baa1a7",

                    }
                }>
                <Modal.Title id="example-custom-modal-styling-title" >
                    <h6 style={{ fontFamily: 'Bungee', fontSize: 25 }}>Create Habit</h6>
                </Modal.Title >
            </Modal.Header>


            {
                showIcons ?
                    <Modal.Body >
                        <h8 style={{ fontFamily: 'Bungee', fontSize: 17 }}>Habit Name</h8>
                        <input type="text" className="form-control" placeholder="E.g. Drink Water " value={habitName} onChange={(c) => setHabitName(c.target.value)} />
                        <br></br>
                        <br></br>

                        <h8 style={{ fontFamily: 'Bungee', fontSize: 17 }}>Description</h8>

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(c) => setDesc(c.target.value)}></textarea>



                        <br></br>
                        <br></br>
                        <h8 style={{ fontFamily: 'Bungee', fontSize: 17 }}>Occurrence</h8>
                        <div className="container">
                            <div className="row">
                                <div className="form-check col-3">
                                    {
                                        mon ?
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => mon ? setMon(false) : setMon(true)} checked /> :
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => mon ? setMon(false) : setMon(true)} />

                                    }
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Monday
                                    </label>
                                </div>

                                <div className="form-check col-3">
                                    {
                                        tues ?
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => tues ? setTues(false) : setTues(true)} checked /> :
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => tues ? setTues(false) : setTues(true)} />
                                    }
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Tuesday
                                    </label>
                                </div>

                                <div className="form-check col-3">
                                {
                                        wed ?
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => wed ? setWed(false) : setWed(true)} checked /> :
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => wed ? setWed(false) : setWed(true)} />
                                }                     
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Wednesday
                                    </label>
                                </div>

                                <div className="form-check col-3">
                                {
                                        thurs ?
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => thurs ? setThurs(false) : setThurs(true)} checked /> :
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => thurs ? setThurs(false) : setThurs(true)} />
                                } 
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Thursday
                                    </label>
                                </div>

                                <div className="form-check col-3">
                                {
                                        fri ?
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => fri ? setFri(false) : setFri(true)} checked /> :
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => fri ? setFri(false) : setFri(true)} />
                                }
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Friday
                                    </label>
                                </div>

                                <div className="form-check col-3">
                                {
                                        sat ?
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => sat ? setSat(false) : setSat(true)} checked /> :
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => sat ? setSat(false) : setSat(true)} />
                                }
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Saturday
                                    </label>
                                </div>

                                <div className="form-check col-3">
                                {
                                        sun ?
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => sun ? setSun(false) : setSun(true)} checked /> :
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => sun ? setSun(false) : setSun(true)} />
                                }
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Sunday
                                    </label>
                                </div>
                            </div>
                        </div>

                        <br></br>
                        <br></br>

                        <h8 style={{ fontFamily: 'Bungee', fontSize: 17 }}>Times Per Occurrence</h8>

                        <select class="form-control" id="exampleFormControlSelect1" value={amount} onChange={(c) => setAmount(c.target.value)}>
                            <option hidden ></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>


                        </select>



                        <br></br>
                        <br></br>
                        <h8 style={{ fontFamily: 'Bungee', fontSize: 17 }}>Choose A Color</h8>
                        <div className="container">
                            <div className="row" style={{ height: 38, marginTop: 10 }}>
                                <div
                                    className="col-1" style={{ backgroundColor: "#8DCAD4", borderRadius: 100, marginRight: 10, border: color === "#8DCAD4" ? "3px solid red" : "0px solid red" }}
                                    onClick={() => setColor("#8DCAD4")}></div>
                                <div
                                    className="col-1" style={{ backgroundColor: "#EDBBB4", borderRadius: 100, marginRight: 10, border: color === "#EDBBB4" ? "3px solid red" : "0px solid red" }}
                                    onClick={() => setColor("#EDBBB4")}></div>
                                <div
                                    className="col-1" style={{ backgroundColor: "#FCB4B6", borderRadius: 100, marginRight: 10, border: color === "#FCB4B6" ? "3px solid red" : "0px solid red" }}
                                    onClick={() => setColor("#FCB4B6")}></div>
                                <div
                                    className="col-1" style={{ backgroundColor: "#DBABBE", borderRadius: 100, marginRight: 10, border: color === "#DBABBE" ? "3px solid red" : "0px solid red" }}
                                    onClick={() => setColor("#DBABBE")}></div>
                            </div>
                            <div className="row" style={{ height: 38, marginTop: 10 }}>
                                <div
                                    className="col-1" style={{ backgroundColor: "#BAA1A7", borderRadius: 100, marginRight: 10, border: color === "#BAA1A7" ? "3px solid red" : "0px solid red" }}
                                    onClick={() => setColor("#BAA1A7")}></div>
                                <div className="col-1" style={{ backgroundColor: "#FCEAC6", borderRadius: 100, marginRight: 10, border: color === "#FCEAC6" ? "3px solid red" : "0px solid red" }}
                                    onClick={() => setColor("#FCEAC6")}></div>
                                <div
                                    className="col-1" style={{ backgroundColor: "#B7A2CC", borderRadius: 100, marginRight: 10, border: color === "#B7A2CC" ? "3px solid red" : "0px solid red" }}
                                    onClick={() => setColor("#B7A2CC")}></div>
                                <div
                                    className="col-1" style={{ backgroundColor: "#CDF1AE", borderRadius: 100, marginRight: 10, border: color === "#CDF1AE" ? "3px solid red" : "0px solid red" }}
                                    onClick={() => setColor("#CDF1AE")}></div>
                            </div>
                        </div>


                    </Modal.Body>

                    :

                    <Modal.Body scrollable >
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h8 style={{ fontFamily: 'Bungee', fontSize: 17 }}>Choose An Icon</h8>

                                </div>
                            </div>
                            <div className="row" style={{ marginTop: 40 }}>



                                {IconsArr.map((eachIcon, index) => (
                                    <div className="col-lg-2 col-sm-6">
                                        <div style={{ width: 100, height: 100, margin: "5%", padding: 10 }}>
                                            <img style={{ width: "100%", marginTop: -5, borderRadius: 10, border: icon === index ? "3px solid #EDBBB4" : "0px solid #EDBBB4" }} src={eachIcon} alt="icon" key={index} onClick={() => setIcon(index)} />
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>



                    </Modal.Body>



            }
            <Modal.Footer
            >

                {showIcons ? <Button onClick={() => setShowIcons(false)} variant="secondary" disabled={enableNext}>Next</Button>
                    : <Button onClick={() => setShowIcons(true)} variant="secondary">Prev</Button>}
                {showIcons ? <></> : <Button onClick={()=>addHabit()} variant="secondary" disabled={enableSave}>Save</Button>}
                <Button onClick={closeModal} variant="secondary">Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddModal;