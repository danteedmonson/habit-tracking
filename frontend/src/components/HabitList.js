import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Habit from './Habit';

function HabitList() {



    return (
        <div>
            <Carousel
                infiniteLoop="true"
                showThumbs="false"
                showArrows="true"
                >
                <div className="container "style={{width:"90%", alignItems:"center"}}>
                    <div className="row justify-content-start mx-auto" >
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>



                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>

                 
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                        <div className="col-3 col-auto ">
                            <Habit />
                        </div>
                    </div>
                </div>




            </Carousel>

        </div>
    )
}

export default HabitList;