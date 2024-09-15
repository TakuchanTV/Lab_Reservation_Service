//Calender.jsx//
//これは確認用のコメントです//

import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import { StyledCalender, Sbutton, Sdiv } from './CalenderCss';
import { ReservationList } from './ReservBox/ReservationDevice';
console.log(Sbutton);

export default function CalendarPage (){
    const [activeDate, setActiveDate] = useState(new Date());

    const navigate = useNavigate();
    
  
    useEffect(() => {
    }, [navigate])
    
    const handleDayClick = (value) => {
      setActiveDate(value);
    };

    const changeDay = (days) => {
      const newDate = new Date(activeDate);
      newDate.setDate(newDate.getDate() + days);

      setActiveDate(newDate)
    }

    const setToday = () => {
      setActiveDate(new Date());
    };
  
    
    return (
      <>
        <StyledCalender  locale='ja' value={activeDate} 
      format={(locale, date) => (date , 'd')} onClickDay={handleDayClick}
      tileClassName={({ date, view }) => {
        if (view === 'month' && date.getTime() === activeDate.getTime()){
          return 'react-calendar__tile--active';
        }
      }}/> 
        <Sdiv>
          <Sbutton hoverBgColor="#4bd9d9" onClick={() => changeDay(-1)}>前日</Sbutton>
          <Sbutton hoverBgColor="#f37b7b" onClick={setToday}>今日</Sbutton>
          <Sbutton hoverBgColor="#c6da12" onClick={() => changeDay(+1)}>翌日</Sbutton>
          <ReservationList />
        </Sdiv>
      </>  
    );
  }

 
