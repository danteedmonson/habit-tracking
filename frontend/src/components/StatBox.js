import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BarChart from './BarChart';
import LineGraph from './LineGraph';


function StatBox(props) {



    return (
        <div className="dashBox" id="calBox">
            {!props.noTitle && <div style={{paddingLeft:"20px", paddingTop:12, fontFamily:"Courgette", color:"#EDBBB4"}}>Statistics</div>}
        
            <div id="calBoxInner" style={{ height: "48.7vh", width:"100%", }}>
               
               {props.GraphType == "bar" ? <BarChart Color={props.Color} Checkins={props.Checkins}/> :

                <LineGraph Color={props.Color} Checkins={props.Checkins}/>}
            </div>
        </div>
    )
}

export default StatBox;

