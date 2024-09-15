import CalendarPage from "./Calender"
import styled from "styled-components"
import { Sbutton, Sdiv, StyledCalender } from "./CalenderCss"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ReservationList } from "./ReservBox/ReservationDevice"
import { ReservationTimeTable } from "./ReservBox/ReservationTimeTable"
import { UseText2 } from "./ReservBox/ReservCustomhooks/UseText2"
export const ShowText = () => {


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
    return(
<ResevTable>
    {/* <Sh4>柴田研究室機器予約</Sh4> */}
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
          <Sbutton hoverBgColor="#c6da12" onClick={() => changeDay(+1)} >翌日</Sbutton>
    </Sdiv>
    <Resevdiv>
    <ReservationList />
    <ReservationTimeTable /> 
    </Resevdiv>
    


</ResevTable>
    )
}

const ResevTable = styled.table`
transform: scale(0.85);
height: 10px;

`
const Sh4 = styled.h4`
    margin-top: 0px;
`

const Resevdiv = styled.div`
display: flex;
`