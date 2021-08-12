import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Calendar from './Calendar';


function CalBox() {



    return (
        <div className="dashBox" id="calBox">
            Calendar
        
            <div style={{ height: "48.7vh", width:"100%",  backgroundColor:"white" }}>
            <Calendar />
                
            </div>
        </div>
    )
}

export default CalBox;