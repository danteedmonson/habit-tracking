import React, { useState, useEffect } from 'react';

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Checkmark } from 'react-checkmark';
import EditButton from '../images/editButton.png'
import UndoButton from '../images/undoButton.png'
import IconsArr from './Icons';
//import EditModal from "./EditModal"

function Habit () {

    const [percent, setPercent] = useState(0);
    const [hover, setHover] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [message, setMessage] = useState("");
    const [connections, setConnections] = useState(0);

    return(
<div className="container-fluid" style={{ marginBottom: 40 }}>

{/* The progress bar takes the full width of the div */}
<div
    style={{ width: 120, height: 120, padding: 0 }}
    className="row justify-content-center align-items-center my-row2 mx-auto"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}

>
    {/* On click, the percent will change based on the  */}
    <div onClick={()=> setPercent(percent+10)} style={{ cursor: "pointer" }} className="col">
        <CircularProgressbarWithChildren
            value={percent}
            background="true"
            styles={buildStyles({

                pathColor: "#DBABBE",
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#ffffff',

            })}
        >
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

            {
                percent >= 100 ?
                    <Checkmark size='83px' color="#DBABBE" /> : <img style={{ width: "50%", marginTop: -5 }} src={IconsArr[0]} alt="habit" />

            }               </CircularProgressbarWithChildren>
    </div>
</div>

<div
    className="row  justify-content-center align-items-start my-row2 mx-auto" style={{ width: 140, height: 40 }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>

    <div className="col-4 my-col d-flex justify-content-center"><img style={{ width: "100%", marginTop: 10, display: hover ? "block" : "none", cursor: "pointer" }} src={EditButton} alt="habit" onClick={() => setModalShow(true)} /></div>
    <div className="col-4 my-col d-flex justify-content-center" style={{ fontFamily: 'Bungee', fontSize: 15, padding: 0 }}>Drink Water</div>
    <div className="col-4 my-col" onClick={()=>setPercent(percent-10)} ><img style={{ width: "100%", marginTop: 10, display: hover ? "block" : "none", cursor: "pointer" }} src={UndoButton} alt="habit" /></div>
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