import React, {useRef, useState, useEffect} from "react";
import styled from "styled-components";

export const SelectDays = () => {

   const birthYearRef = useRef(null) ;
   const birthMonthRef = useRef(null) ;
   const birthDayRef = useRef(null) ;

   const [age, setAge] = useState('');
   const [birthYear, setBirthYear] = useState(new Date().getFullYear());
   const [birthMonth, setBirthMonth] = useState(new Date().getMonth()+1);
   const [birthDay, setBirthDay] = useState(new Date().getDay());

   const selectBirthYear = (e) => {
    setBirthYear(e.target.value);
    setAge(`${e.target.value}_${birthMonth}_${birthDay}`);
   }
   const selectBirthMonth = (e) => {
    setBirthMonth(e.target.value);
    setAge(`${birthYear}_${e.target.value}_${birthDay}`);
   }
   const selectBirthDay = (e) => {
    setBirthDay(e.target.value);
    setAge(`${birthYear}_${birthMonth}_${e.target.value}`);
   }

   const setYear = () => {
    if (birthYearRef.current) {
      birthYearRef.current.innerHTML = ""; // 既存の選択肢をクリア
      for (let i = 2000; i <= new Date().getFullYear(); i++) {
        let op = document.createElement("option");
        op.value = i;
        op.text = i;
        birthYearRef.current.appendChild(op);
      }
      birthYearRef.current.value = birthYear;
    }
  };
  const setMonth = () => {
    if (birthMonthRef.current) {
      birthMonthRef.current.innerHTML = ""; // 既存の選択肢をクリア
      for (let i = 1; i <= 12; i++) {
        let op = document.createElement("option");
        op.value = i;
        op.text = i;
        birthMonthRef.current.appendChild(op);
      }
      birthMonthRef.current.value = birthMonth;
    }
  };
  const setDay = () => {
    if (birthDayRef.current) {
      birthDayRef.current.innerHTML = ""; // 既存の選択肢をクリア
      if (
        birthYearRef.current &&
        birthYearRef.current.value !== "" &&
        birthMonthRef.current &&
        birthMonthRef.current.value !== ""
      ) {
        const lastday = new Date(
          Number(birthYearRef.current.value),
          Number(birthMonthRef.current.value),
          0
        ).getDate();
        for (let i = 1; i <= lastday; i++) {
          let op = document.createElement("option");
          op.value = i;
          op.text = i;
          birthDayRef.current.appendChild(op);
        }
        birthDayRef.current.value = birthDay;
      }
    }
  };
      useEffect(() => {
        setYear();
        setMonth();
        setDay();
      }, []);
      // 
      useEffect(() => {
        setDay();
      }, [birthDay,birthMonth]);
      
        return(
          <div className="makeStyles" >
            <GetDayText className="makeStyles" >予約日</GetDayText>
            <select ref={birthYearRef} value={birthYear} onChange={selectBirthYear} id="birth-year" name="year"></select>年
            <select ref={birthMonthRef} value={birthMonth} onChange={selectBirthMonth} id="birth-month" name="month"></select>月
            <select ref={birthDayRef} value={birthDay} onChange={selectBirthDay} id="birth-day" name="day"></select>日
          </div>  
        )
   
}

const GetDayText = styled.p`
    margin: 0px;
` 