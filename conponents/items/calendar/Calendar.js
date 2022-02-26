import React, { useState, useEffect, useRef } from "react";
import moment, { calendarFormat } from "moment";
import BuildCalender from "./buildCalender";
import dayStyles from "./styleCalendar";
import HeaderCalendar from "./headerCalendar";
import "moment/locale/th";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
const Calendar = ({ onClickOutside }) => {
  const [calendar, setcalendar] = useState([]);
  const [value, setvalue] = useState(moment().locale("th"));
  const ref = useRef(null);

  useEffect(() => {
    setcalendar(BuildCalender(value));
  }, [value]);

  return (
    <div className="calendar">
      <div className="calendar_title">
        <p>
          <span>
            <FontAwesomeIcon className="jr_icon" icon={faCalendarAlt} />
          </span>
          ภายในวันอาทิตย์: 14-20-2022 - 14-02-2022 (GMT+)
        </p>
      </div>
      <div className="calendar_grid">
        <div className="calendar_menu">
          <ul className="calendar_menu_later">
            <li className="calendar_menu_item">Real-time</li>
            <li className="calendar_menu_item">เมื่อวาน</li>
            <li className="calendar_menu_item">ย้อนหลัง 7 วัน</li>
            <li className="calendar_menu_item">ย้อนหลัง 30 วัน</li>
          </ul>
          <ul className="calendar_menu_recent">
            <li className="calendar_menu_item">
              <div>ภายในวันที่</div>
              <div>{">"}</div>
            </li>
            <li className="calendar_menu_item">
              <div>ภายในวันอาทิตย์</div>
              <div>{">"}</div>
            </li>
            <li className="calendar_menu_item">
              <div>ภายในเดือน</div>
              <div>{">"}</div>
            </li>
            <li className="calendar_menu_item">
              <div>ภายในปี</div>
              <div>{">"}</div>
            </li>
          </ul>
        </div>
        <div className="calendar_datePiker">
          <HeaderCalendar value={value} setValue={setvalue} />
          <div className="calendar_week">
            {["จ.", "อ.", "พ.", "พฤ.", "ศ", "ส", "อา."].map((d, key) => (
              <div key={key} className="calendar_week_item">
                {d}
              </div>
            ))}
          </div>
          {calendar.map((week) => (
            <div className="day">
              {week.map((day, key) => (
                <div
                  key={key}
                  onClick={() => setvalue(day)}
                  className={dayStyles(day, value)}
                >
                  {day.format("D").toString()}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
