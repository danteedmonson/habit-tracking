import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HabitList from "./HabitList";
import AddModal from "./AddModal";
import Button from "react-bootstrap/esm/Button";

function HabitBox(props) {
    const [hover, setHover] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [rerend, setRerend] = useState(false);

    const rerender = () => {
        if (rerend === false){
            setRerend(true);
            console.log("HABIT BOX REREND STATE CHANGE");
        }
        else{
            setRerend(false);
            console.log("HABIT BOX REREND STATE CHANGE");
        }
    };

    

    return (
        <>
            <div className="frostedBackground"></div>
            <div className="dashBox" id="habitBox">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-auto" style={{ marginLeft: -11.25, paddingLeft:"20px", paddingTop:12, fontFamily:"Courgette", color:"#EDBBB4" }}>Habits</div>

                        <div className="col-lg-1 col-md-2 col-sm-2">
                            <Button
                                variant="secondary"
                                onClick={() => setModalShow(true)}
                                style={{
                                    color: "white",
                                    backgroundColor: "transparent",
                                    width: "100%",
                                    marginTop: "-7px",
                                    height: "120%",
                                    border: "3px solid white",
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    opacity: 0.7
                                }}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </div>

                <div style={{ height: "100%", width: "100%", borderRadius: 0 }}>
                    <br></br>
                    <HabitList rerend={rerend} rerender={rerender} progRerender={props.progRerender} />
                </div>
            </div>
            <AddModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                rerender={rerender}
                progRerender={props.progRerender}
            />
        </>
    );
}

const addStyle = {
    borderRadius: 15,
    border: "2px solid white",
    width: "10%",
    textAlign: "center",
    color: "white",
    backgroundImage: "linear-gradient(to right, #baa1a7 , #AEC6CF)",
};

export default HabitBox;
