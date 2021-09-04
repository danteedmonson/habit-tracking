import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HabitList from './HabitList';
import quotes from './Quotes';

function MotiBox() {



    return (
        <div className="dashBox" id="motiBox">
            <div style={{paddingLeft:"20px", paddingTop:12, fontFamily:"Courgette", color:"#EDBBB4"}}>Motivation</div>
        
            <div style={{ height: "48.7vh", width:"100%", fontFamily:"Roboto", textAlign:"left", padding:20, fontSize:"10vw" }}>
             <div style={{ width: "80vw", height:"100%",}}>
                 <div style={{width:"15%", display:"flex", justifyContent:"center", flexDirection:"column", height:"80%"}}>
                <h3><i>{quotes[Math.floor(Math.random() * 50)].q}</i></h3>
                <h3><i>- {quotes[Math.floor(Math.random() * 50)].a}</i></h3>
                </div>
                </div>

            </div>
        </div>
    )
}

export default MotiBox;