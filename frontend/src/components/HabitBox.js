import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HabitList from "./HabitList";
import AddModal from "./AddModal";
import Button from "react-bootstrap/esm/Button";

function HabitBox(props) {
    const [modalShow, setModalShow] = React.useState(false);
    //state for rerendering the habitlist
    const [rerend, setRerend] = useState(false);

    // rerender the habit list to show update
    const rerender = () => {
        if (rerend === false) {
            setRerend(true);
            console.log("HABIT BOX REREND STATE CHANGE");
        }
        else {
            setRerend(false);
            console.log("HABIT BOX REREND STATE CHANGE");
        }
    };



    return (
        <>

            <div className="dashBox" id={props.hPage ? "habitPageBox" : "habitBox"}>
                <div style={{ position: "absolute", left: 20, top: 12, fontFamily: "Courgette", color: "#EDBBB4" }}>Habits</div>
                <Button
                    variant="secondary"
                    onClick={() => setModalShow(true)}
                    style={{
                        color: "white",
                        backgroundColor: "transparent",
                        width: "40px",
                        position: "absolute",
                        top: "-7px",
                        right: 20,
                        height: "50px",
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


                <div style={{ position: "absolute", width: "100%", height: "70%", borderRadius: 0, bottom: "0 !important", marginBottom: "0px !important", bottom: 15 }}>
                    <div style={{ position: "relative", height: "100%", width: "100%" }}>
                        <HabitList rerend={rerend} rerender={rerender} progRerender={props.progRerender} hPage={props.hPage} />
                    </div>
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



export default HabitBox;
