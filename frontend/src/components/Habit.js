import React, { useState, useEffect } from 'react';

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import EditButton from '../images/editButton.png'
import UndoButton from '../images/undoButton.png'
import IconsArr from './Icons';
//import EditModal from "./EditModal"

function Habit(props) {

    const [percent, setPercent] = useState(0);
    const [hover, setHover] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [message, setMessage] = useState("");
    const [connections, setConnections] = useState(0);






    return (
        <div className="container-fluid, my-habit " style={{ marginBottom: 40, width: "100%", opacity: props.Active ? 1 : 0.5 }}>

            <div style={{backgroundColor:"black"}}></div>

            {/* The progress bar takes the full width of the div */}
            <div
                style={{ width: "14vmin", height: "14vmin", padding: 0 }}
                className="row justify-content-center align-items-center my-row2 mx-auto "
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}

            >

                {/* On click, the percent will change based on the  */}
                <div onClick={() => setPercent(percent + 100 / props.TimesPer )} style={{ cursor: "pointer" }} className="col">
                    <CircularProgressbarWithChildren
                        value={percent}
                        background="true"
                        styles={buildStyles({

                            pathColor: props.Color,
                            textColor: '#f88',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#ffffff',

                        })}
                    >
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

                        {
                            percent >= 100 ?
                                <Checkmark size='83px' color={props.Color} /> : <img style={{ width: "50%", marginTop: -5 }} src={IconsArr[props.Icon]} alt="habit" />

                        }               </CircularProgressbarWithChildren>
                </div>
            </div>

            <div
                className="row  justify-content-center align-items-start my-row2 mx-auto" style={{ width: "100%", height: 40 }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>

                <div className="col-4 my-col d-flex justify-content-center lesspadding" style={{ cursor: "pointer" }}><img style={{ width: "1.8vw", marginTop: 10, opacity: hover ? 1 : 0, cursor: "pointer" }} src={EditButton} alt="habit" onClick={() => setModalShow(true)} /></div>
                <div className="col-4 my-col d-flex justify-content-center " style={{ fontFamily: 'Bungee', fontSize: "1.8vmin", padding: 0 }}>{props.HabitName} </div>
                <div className="col-4 my-col lesspadding" style={{ cursor: "pointer" }} onClick={() => setPercent(percent - 100 / props.TimesPer)} ><img style={{ width: "1.8vw", marginTop: 10, opacity: hover ? 1 : 0, cursor: "pointer" }} src={UndoButton} alt="habit" /></div>
            </div>

            {/* <EditModal
    show={modalShow}
    onHide={() => setModalShow(false)}
    HabitName={props.HabitName}
    Description={props.Description}
    Occurence={props.Occurence}
    TimesPerOccurence={props.TimesPerOccurence}
    Color={props.Color}
    Icon={props.Icon}
    _id={props._id}
    LastCheckinDate={props.LastCheckinDate}
    CurrentStreak={props.CurrentStreak}
    LongestStreak={props.LongestStreak}
    Progress={props.Progress}
    Checkins={props.Checkins}

/> */}

        </div>

    )
}

export default Habit