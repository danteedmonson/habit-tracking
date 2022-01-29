import React from "react";

import Check from "../images/check";

function Calendar(props) {
  var d = new Date();
  var checkinDates = [];

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  var days = [];

  const dayStyle = {
    borderBottom: "1px solid white",

    borderLeft: "1px solid white",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 12,
    cursor: "pointer",
    color: "white",
  };

  const CalendarStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    height: "100%",
  };

  for (var i = 1; i <= daysInMonth(d.getMonth(), d.getFullYear()); i++) {
    if (typeof props.Checkins !== "undefined") {
      for (var j = props.dash ? 0 : 1; j < props.Checkins.length; j++) {
        if (props.Checkins[j].Streak !== 0) {
          var date = new Date(props.Checkins[j].CurrDate);

          if (
            date.getDate() === i &&
            date.getFullYear() === d.getFullYear() &&
            date.getMonth() === d.getMonth()
          ) {
            checkinDates.push(i);
          }
        }
      }
    }

    days.push(
      <div style={dayStyle} id={"day" + i} key={i}>
        {i}
        <br></br>
        {checkinDates.includes(i) ? (
          <Check
            style={{ height: 40 }}
            key={i}
            stroke={props.dash ? "#EDBBB4" : props.Color}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }

  return (
    <div style={CalendarStyle}>
      {days}
      <div
        style={{
          borderLeft: "1px solid white",
          borderBottom: "1px solid white",
          width: "500%",
        }}
      ></div>
    </div>
  );
}

export default Calendar;
