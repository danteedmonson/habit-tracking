import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BarChart from './BarChart';


function StatBox() {



    return (
        <div className="dashBox" id="calBox">
            <div style={{paddingLeft:"20px", paddingTop:12, fontFamily:"Courgette", color:"#EDBBB4"}}>Statistics</div>
        
            <div id="calBoxInner" style={{ height: "48.7vh", width:"100%", }}>
               
                <BarChart/>
            </div>
        </div>
    )
}

export default StatBox;

