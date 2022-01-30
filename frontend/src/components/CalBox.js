import React from 'react';
import Calendar from './Calendar';


function CalBox(props) {

    return (
        <div className="dashBox" id="calBox">
            <div style={{paddingLeft:"20px", paddingTop:12, marginBottom:5, fontFamily:"Courgette", color:props.dash ? "#EDBBB4": props.Color}}>Calendar</div>
        
            <div style={{ height: "48.7vh", width:"100%",  borderRight:"1px solid white", borderTop:"1px solid white" }}>
            <Calendar Checkins={props.Checkins} Color={props.Color} dash={props.dash}/>
                
            </div>
        </div>
    )
}

export default CalBox;