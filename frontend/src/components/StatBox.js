import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BarChart from './BarChart';


function StatBox() {



    return (
        <div className="dashBox" id="calBox">
            Stats
        
            <div id="calBoxInner" style={{ height: "48.7vh", width:"100%",  backgroundColor:"white" }}>
               
                <BarChart/>
            </div>
        </div>
    )
}

export default StatBox;

