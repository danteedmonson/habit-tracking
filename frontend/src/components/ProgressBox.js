import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 40,
    borderRadius: 27,
    border: "2px solid black",
    width:"100vh"
  },
  colorPrimary: {
    backgroundColor: "lightgrey", //theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 27,
    backgroundColor: "#EDBBB4",
    boxShadow: " 0 0 20px black",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function ProgressBox() {
  const [percent, setPercent] = useState(20);

  const classes = useStyles();

  return (
    <div className="dashBox" id="progressBox" style={{ alignItems: "center" }}>
      Progress
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "10.5vh",
         alignItems:"center",
          display: "flex",
          flexDirection: "column",
         
          justifyContent:"center"

        }}
      >
        <div className={classes.root}>
          {/* <FacebookCircularProgress /> */}
          <br />
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
      </div>
    </div>
  );
}

export default ProgressBox;
