import React from 'react';
import HabitList from '../components/HabitList';

function Dashboard () {

    return (
        <div className="container dash-container " style={{height:"100vh", width:"70%", 
        backgroundColor:"white", color:"black", paddingTop:"10%"}}>
            <h2 style={{marginLeft:"5%", fontFamily: 'Bungee'}}>Habits</h2>
            <div style={{height:0.2, width:"90%", backgroundColor:"black", margin:"auto", opacity: 0.3}}></div>
            <br></br>
      
            <HabitList/>
            <div style={{height:0.2, width:"90%", backgroundColor:"black", margin:"auto", opacity: 0.3}}></div>
        </div>
    )
}

export default Dashboard;