import React from "react";

const HeaderCalendar = ({ value, setValue }) => {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }
  function nextMonth() {
    return value.clone().add(1, "month");
  }
  return (
    <div className="calendar_header" >
      <div onClick={() => setValue(prevMonth())} className="calendar_previous">
        {String.fromCharCode(171)}
      </div>
      <div>
        {currMonthName()} {currYear()}
      </div>
      <div onClick={() => setValue(nextMonth())} className="calendar_next">
        {String.fromCharCode(187)}
      </div>
    </div>
  );
};

export default HeaderCalendar;
