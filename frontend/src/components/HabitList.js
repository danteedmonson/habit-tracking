import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Habit from './Habit';

function HabitList(props) {

    const [habits, setHabits] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [page1, setPage1] = useState([]);
    const [page2, setPage2] = useState([]);
    const [selected, setSelected] = useState(habits.length > 8 ? 1 : 0)


    useEffect(() => {
        const jwt = localStorage.getItem('jwt');

        try {
            axios({

                method: 'post',
                url: 'http://localhost:5000/api/getHabits',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': jwt
                },

            }).then(res => {
                setHabits(res.data);
                
                console.log(habits);
                setLoaded(true);




            }).catch(err => console.log("hello"))
        } catch (err) {

        }

    }, [props.rerend])

    useEffect(() => {
        if (habits.length > 8) {
            setPage1(habits.slice(0, 8));
            setPage2(habits.slice(8, habits.length));
        }
        else {
            setPage1(habits)
            console.log(habits)
        }

    }, [habits, props.rerend])

    useEffect(() => {
        setHabits(habits)
        setSelected(habits.length > 8 ? 1 : 0)
       
    })





    if (loaded && habits.length > 0 && habits.length <= 8)
        return (
            <div>

                <Carousel
                    infiniteLoop="true"
                    showThumbs="false"
                    showArrows="true"
                    selectedItem={selected}


                >
                    <div className="container ">
                        <div className="row justify-content-start mx-auto" style={{ height: "80%" }} >

                            {
                                page1.map((habit, index) => {
                                    return (
                                        <div className="col-3 col-auto " key={index}>

                                            <Habit
                                                Active={habit.Active}
                                                CheckIns={habit.CheckIns}
                                                Color={habit.Color}
                                                Description={habit.Description}
                                                HabitName={habit.HabitName}
                                                Icon={habit.Icon}
                                                Occurrence={habit.Occurrence}
                                                Progress={habit.Progress}
                                                TimesPer={habit.TimesPer}
                                                _id={habit._id}
                                                rerender={props.rerender}
                                                rerend={props.rerend}
                                                progRerender={props.progRerender}
                                            />

                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>






                </Carousel>
            </div>
        )
    else if (loaded && habits.length > 8)
        return (
            <div>
                <Carousel
                    infiniteLoop="true"
                    showThumbs="false"
                    showArrows="true"
                    selectedItem={0}
                    
                    
                >
                    <div className="container ">
                        <div className="row justify-content-start mx-auto" style={{ height: "80%" }} >

                            {
                                page1.map((habit, index) => {
                                    return (
                                        <div className="col-3 col-auto " key={index}>

                                            <Habit
                                                Active={habit.Active}
                                                CheckIns={habit.CheckIns}
                                                Color={habit.Color}
                                                Description={habit.Description}
                                                HabitName={habit.HabitName}
                                                Icon={habit.Icon}
                                                Occurrence={habit.Occurrence}
                                                Progress={habit.Progress}
                                                TimesPer={habit.TimesPer}
                                                _id={habit._id}
                                                rerender={props.rerender}
                                                rerend={props.rerend}
                                                progRerender={props.progRerender} />

                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>

                    <div className="container ">
                        <div className="row justify-content-start mx-auto" style={{ height: "80%" }} >

                            {
                                page2.map((habit, index) => {
                                    return (
                                        <div className="col-3 col-auto " key={index}>

                                            <Habit
                                                Active={habit.Active}
                                                CheckIns={habit.CheckIns}
                                                Color={habit.Color}
                                                Description={habit.Description}
                                                HabitName={habit.HabitName}
                                                Icon={habit.Icon}
                                                Occurrence={habit.Occurrence}
                                                Progress={habit.Progress}
                                                TimesPer={habit.TimesPer}
                                                _id={habit._id}
                                                rerender={props.rerender}
                                                rerend={props.rerend}
                                                progRerender={props.progRerender} />

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Carousel>
            </div>
        )






    else
        return (<div style={{ color: "black" }}>yoooooo</div>)
}

export default HabitList;