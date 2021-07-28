import React from 'react';
import HabitBox from '../components/HabitBox';
import ProgressBox from '../components/ProgressBox';
import MotiBox from '../components/MotiBox';
import CalBox from '../components/CalBox';
import StatBox from '../components/StatBox';

function Dashboard() {

    return (
        <div style={{ color: "black" }}>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                {/* <div className="row">
                    <div className="col">
                    <ProgressBox />
                    </div>
                </div>
                <div className="row">
                    <HabitBox />
                </div>

            </div> */}

                <div className="row mx-auto justify-content-center align-items-center">
                    <div className="col-12 my-col">
                        <ProgressBox />
                    </div>
                </div>
                <div className="row mx-auto justify-content-between align-items-center">
                    <div className="col-9 my-col">
                        <HabitBox />
                    </div>
                    
                    <div className="col-3 my-col">
                        <MotiBox />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-6 my-col">
                        <StatBox />
                    </div>

                   
                    
                    <div className="col-6 my-col">
                        <CalBox />
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}

export default Dashboard;