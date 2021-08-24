import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HabitList from './HabitList';
import AddModal from './AddModal';
import Button from 'react-bootstrap/esm/Button';

function HabitBox() {
    const [hover, setHover] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [rerend, setRerend] = useState(false);


    const rerender = () => {
        setRerend(true);
    }



    return (
        <>
        <div className="dashBox" id="habitBox">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-auto">Habit</div>

                    <div className="col-1">
                        <Button variant="secondary" onClick={() => setModalShow(true)} style={{color:"#EDBBB4", border: "2px solid #EDBBB4", width:"100%", marginTop:"-7px", height:"120%",  borderBottomRightRadius: 27, borderBottomLeftRadius: 27}}>+</Button>
                    </div>

                </div>
            </div>
            
            <div style={{ height: "48.7vh", width: "100%", borderRadius: 0, backgroundColor: "white" }}>
            <br></br>
                <HabitList  rerend={rerend}/>

            </div>
        </div>
        <AddModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        rerender={rerender}
      />
      </>
    )
}

const addStyle =
{
    borderRadius: 15,
    border: "2px solid white",
    width: "10%", textAlign: "center",
    color: "white",
    backgroundImage: "linear-gradient(to right, #baa1a7 , #AEC6CF)"

    
}

export default HabitBox;