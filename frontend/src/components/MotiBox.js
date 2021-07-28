import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HabitList from './HabitList';

function MotiBox() {



    return (
        <div className="dashBox" id="motiBox">
            Motivation
        
            <div style={{ height: "48.7vh", width:"31.5vh",  backgroundColor:"white", fontFamily:"roboto", textAlign:"center" }}>
               <br></br>
               <br></br>
                <h3><i>"I can do all things through Christ"</i></h3>
                <h3><i>- me</i></h3>

            </div>
        </div>
    )
}

export default MotiBox;