import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Calendar from './Calendar';


function CalBox() {



    return (
        <div className="dashBox" id="calBox">
            <div style={{paddingLeft:"20px", paddingTop:12, marginBottom:5, fontFamily:"Courgette", color:"#EDBBB4"}}>Calendar</div>
        
            <div style={{ height: "48.7vh", width:"100%",  borderRight:"1px solid white", borderTop:"1px solid white" }}>
            <Calendar />
                
            </div>
        </div>
    )
}

export default CalBox;