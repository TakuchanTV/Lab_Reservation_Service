//ReservationTimeTable.tsx//

import styled from "styled-components"
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

interface Props {
  STdColor:string,
};

interface Props2 {
  BgColor:string,
  textColor:string,
  hoverBgColor:string,
  hovertextColor:string
};

interface Texts {
  text:string, text2:string,text3:string, text4:string, text5:string, 
  text6:string, text7:string, text8:string,text9:string,text10:string,
    text11:string, text12:string, text13:string, text14:string, text15:string, 
    text16:string, text17:string, text18:string,text19:string,text20:string,
     text21:string, text22:string, text23:string,text24:string, text25:string, 
     text26:string, text27:string, text28:string, text29:string, text30:string,
     text31:string, text32:string, text33:string, text34:string,
};

interface SelectColors {
  SelectColor:string, SelectColor2:string,SelectColor3:string, SelectColor4:string,SelectColor5:string, 
  SelectColor6:string,SelectColor7:string, SelectColor8:string,SelectColor9:string, SelectColor10:string,
  SelectColor11:string, SelectColor12:string,SelectColor13:string, SelectColor14:string,SelectColor15:string, 
  SelectColor16:string,SelectColor17:string, 
}

interface  Button{
button:string, button2:string, button3:string,button4:string, button5:string, button6:string, button7:string, button8:string,
button9:string, button10:string,button11:string, button12:string, button13:string, button14:string, button15:string,
button16:string, button17:string
}

interface Location extends Texts, SelectColors, Button {}

export const ReservationTimeTable = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [texts, setTexts] = useState<Texts | null>(null);
  const [colors, setColors] = useState<SelectColors | null>(null);

  useEffect(() => {
    
    const button = document.getElementById("reservebutton") as HTMLInputElement
    const button2 = document.getElementById("reservebutton2") as HTMLInputElement
    const button3 = document.getElementById("reservebutton3") as HTMLInputElement
    const button4 = document.getElementById("reservebutton4") as HTMLInputElement
    const button5 = document.getElementById("reservebutton5") as HTMLInputElement
    const button6 = document.getElementById("reservebutton6") as HTMLInputElement
    const button7 = document.getElementById("reservebutton7") as HTMLInputElement
    const button8 = document.getElementById("reservebutton8") as HTMLInputElement
    const button9 = document.getElementById("reservebutton9") as HTMLInputElement
    const button10 = document.getElementById("reservebutton10") as HTMLInputElement
    const button11 = document.getElementById("reservebutton11") as HTMLInputElement
    const button12 = document.getElementById("reservebutton12") as HTMLInputElement
    const button13 = document.getElementById("reservebutton13") as HTMLInputElement
    const button14 = document.getElementById("reservebutton14") as HTMLInputElement
    const button15 = document.getElementById("reservebutton15") as HTMLInputElement
    const button16 = document.getElementById("reservebutton16") as HTMLInputElement
    const button17 = document.getElementById("reservebutton17") as HTMLInputElement
    
    if (button) {
      if (localStorage.hasOwnProperty("text") || localStorage.hasOwnProperty("text2") 
      || localStorage.hasOwnProperty("SelectColor")) {
         button.style.display = "block"
        handleStored();
      }else {
      button.style.display = "none"
      }

      if (localStorage.hasOwnProperty("text3") || localStorage.hasOwnProperty("text4") 
        || localStorage.hasOwnProperty("SelectColor2")){
         button2.style.display = "block"
        handleStored2();
      }else {
        button2.style.display = "none"
      } 

      if (localStorage.hasOwnProperty("text5") || localStorage.hasOwnProperty("text6") 
        || localStorage.hasOwnProperty("SelectColor3")){
        button3.style.display = "block"
        handleStored3();
      }else {
        button3.style.display = "none"
      }

      if (localStorage.hasOwnProperty("text7") || localStorage.hasOwnProperty("text8") 
        || localStorage.hasOwnProperty("SelectColor4")){
        button4.style.display = "block"
        handleStored4();
      }else {
        button4.style.display = "none"

      }

      if (localStorage.hasOwnProperty("text9") || (localStorage.hasOwnProperty("text10")
       || localStorage.hasOwnProperty("SelectColor5"))){
        button5.style.display = "block"
        handleStored5();
      }else {
        button5.style.display = "none"
      }

      if (localStorage.hasOwnProperty("text11") || (localStorage.hasOwnProperty("text12")) ||
       (localStorage.hasOwnProperty("SelectColor6"))){
         button6.style.display = "block"
      }else {
        button6.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text13")) || (localStorage.hasOwnProperty("text14")) ||
       (localStorage.hasOwnProperty("SelectColor7"))){
        button7.style.display = "block"
      }else {
        button7.style.display = "none"
      }

      if (localStorage.hasOwnProperty("text15") || (localStorage.hasOwnProperty("text16")) ||
       (localStorage.hasOwnProperty("SelectColor8"))){
        button8.style.display = "block"
      }else {
        button8.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text17")) || (localStorage.hasOwnProperty("text18")) ||
       (localStorage.hasOwnProperty("SelectColor9"))){
        button9.style.display = "block"
      }else {
       button9.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text19")) || (localStorage.hasOwnProperty("text20")) ||
       (localStorage.hasOwnProperty("SelectColor10"))){
       button10.style.display = "block"
      }else {
        button10.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text21")) || (localStorage.hasOwnProperty("text22")) ||
       (localStorage.hasOwnProperty("SelectColor11"))){
        button11.style.display = "block"
       
      }else {
         button11.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text23")) || (localStorage.hasOwnProperty("text24")) ||
       (localStorage.hasOwnProperty("SelectColor12"))){
         button12.style.display = "block"
       
      }else {
        button12.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text25")) || (localStorage.hasOwnProperty("text26")) ||
       (localStorage.hasOwnProperty("SelectColor13"))){
        button13.style.display = "block"
      }else {
        button13.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text27")) || (localStorage.hasOwnProperty("text28")) ||
       (localStorage.hasOwnProperty("SelectColor14"))){
       button14.style.display = "block"
      }else {
        button14.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text29")) || (localStorage.hasOwnProperty("text30")) ||
       (localStorage.hasOwnProperty("SelectColor15"))){
        button15.style.display = "block"
      }else {
       button15.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text31")) || (localStorage.hasOwnProperty("text32")) ||
       (localStorage.hasOwnProperty("SelectColor16"))){
       button16.style.display = "block"
      }else {
        button16.style.display = "none"
      }

      if ((localStorage.hasOwnProperty("text33")) || (localStorage.hasOwnProperty("text34")) ||
       (localStorage.hasOwnProperty("SelectColor17"))){
        button17.style.display = "block"
      }else {
        button17.style.display = "none"
      } 
    }else{
      console.log("buttonはfalse")
    } },
    [])
  
  
  
  
  const locationState:Location | null = location.state;

  if (!locationState) {
    console.error("Location.state is null or undifined");
    return null;
  }

  
  const handleClick = () => {
    if(window.confirm("前のページに戻りますか")) {
      navigate("/ReservationPage")
    }else{
     
    }
  }

  const handleStored = () => {
    
    const existingText = JSON.parse(localStorage.getItem("text") || "{}");
    const existingText2 = JSON.parse(localStorage.getItem("text2") || "{}");
    const existingColor = JSON.parse(localStorage.getItem("SelectColor") || "{}");

    const texts: Texts = locationState;
    const colors: SelectColors = locationState;

    const updatedText =  { ...existingText,...texts};
    const updatedText2 = { ...existingText2,...texts};
    const updatedColor = { ...existingColor,...colors};

    localStorage.setItem("text", JSON.stringify(updatedText));
    localStorage.setItem("text2", JSON.stringify(updatedText2));
    localStorage.setItem("SelectColor", JSON.stringify(updatedColor));
    setTexts(prevText => ({...prevText,...updatedText}))
    setTexts(prevText2 => ({...prevText2,...updatedText2}))
    setColors(prevColor => ({...prevColor,...updatedColor}))
};
    
    const handleStored2 = () => {
      const existingText3 = JSON.parse(localStorage.getItem("text3") || "{}");
      const existingText4 = JSON.parse(localStorage.getItem("text4") || "{}");
      const existingColor2 = JSON.parse(localStorage.getItem("SelectColor2") || "{}");

      const texts: Texts = locationState;
      const colors: SelectColors = locationState;

      const updatedText3 = { ...existingText3,...texts};
      const updatedText4 = { ...existingText4,...texts};
      const updatedColor2 = { ...existingColor2,...colors};

      localStorage.setItem("text3", JSON.stringify(updatedText3));
      localStorage.setItem("text4", JSON.stringify(updatedText4));
      localStorage.setItem("SelectColor2", JSON.stringify(updatedColor2));
      setTexts(prevText3 => ({...prevText3,...updatedText3}))
      setTexts(prevText4 => ({...prevText4,...updatedText4}))
      setColors(prevColor2 => ({...prevColor2,...updatedColor2}))
};
  
  const handleStored3 = () => {

  const existingText5 = JSON.parse(localStorage.getItem("text5") || "{}");
  const existingText6 = JSON.parse(localStorage.getItem("text6") || "{}");
  const existingColor3 = JSON.parse(localStorage.getItem("SelectColor3") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText5 = { ...existingText5,...texts};
  const updatedText6 = { ...existingText6,...texts};
  const updatedColor3 = { ...existingColor3,...colors};

  localStorage.setItem("text5", JSON.stringify(updatedText5));
  localStorage.setItem("text6", JSON.stringify(updatedText6));
  localStorage.setItem("SelectColor3", JSON.stringify(updatedColor3));
  setTexts(prevText5 => ({...prevText5,...updatedText5}))
  setTexts(prevText6 => ({...prevText6,...updatedText6}))
  setColors(prevColor3 => ({...prevColor3,...updatedColor3}))
}
  const handleStored4 = () => {

  const existingText7 = JSON.parse(localStorage.getItem("text7") || "{}");
  const existingText8 = JSON.parse(localStorage.getItem("text8") || "{}");
  const existingColor4 = JSON.parse(localStorage.getItem("SelectColor4") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText7 = { ...existingText7, ...texts };
  const updatedText8 = { ...existingText8, ...texts };
  const updatedColor4 = { ...existingColor4, ...colors };

  localStorage.setItem("text7", JSON.stringify(updatedText7));
  localStorage.setItem("text8", JSON.stringify(updatedText8));
  localStorage.setItem("SelectColor4", JSON.stringify(updatedColor4));
  setTexts(prevText7 => ({...prevText7,...updatedText7}))
  setTexts(prevText8 => ({...prevText8,...updatedText8}))
  setColors(prevColor4 => ({...prevColor4,...updatedColor4}))
}
  const handleStored5 = () => {

  const existingText9 = JSON.parse(localStorage.getItem("text9") || "{}");
  const existingText10 = JSON.parse(localStorage.getItem("text10") || "{}");
  const existingColor5 = JSON.parse(localStorage.getItem("SelectColor5") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText9 = { ...existingText9, ...texts };
  const updatedText10 = { ...existingText10, ...texts };
  const updatedColor5 = { ...existingColor5, ...colors };

  localStorage.setItem("text9", JSON.stringify(updatedText9));
  localStorage.setItem("text10", JSON.stringify(updatedText10));
  localStorage.setItem("SelectColor5", JSON.stringify(updatedColor5));
  setTexts(prevText9 => ({...prevText9,...updatedText9}))
  setTexts(prevText10 => ({...prevText10,...updatedText10}))
  setColors(prevColor5 => ({...prevColor5,...updatedColor5}))
}


const handleDeleted = () => {
 localStorage.removeItem("Texts");
 localStorage.removeItem("SelectColors")

 setTexts(null);
 setColors(null);
}



const BacktoPage = () => {
if(window.confirm("予約のページに戻りますか?")){
  navigate("/ReservationPage")
}
}

const BacktoPage2 = () => {
  if(window.confirm("予約のページに戻りますか?")){
    navigate("/ReservationPage2")
  }
  }
const BacktoPage3 = () => {
  if(window.confirm("予約のページに戻りますか?")){
     navigate("/ReservationPage3")
  }
  }
const BacktoPage4 = () => {
  if(window.confirm("予約のページに戻りますか?")){
    navigate("/ReservationPage4")
  }
  }
const BacktoPage5 = () => {
  if(window.confirm("予約のページに戻りますか?")){
     navigate("/ReservationPage5")
  }
  }
const BacktoPage6 = () => {
  if(window.confirm("予約のページに戻りますか?")){
    navigate("/ReservationPage6")
  }
  }
const BacktoPage7 = () => {
  if(window.confirm("予約のページに戻りますか?")){
    navigate("/ReservationPage7")
  }
  }
const BacktoPage8 = () => {
  if(window.confirm("予約のページに戻りますか?")){
     navigate("/ReservationPage8")
  }
  }
const BacktoPage9 = () => {
  if(window.confirm("予約のページに戻りますか?")){
   navigate("/ReservationPage9")
  }
  }
const BacktoPage10 = () => {
  if(window.confirm("予約のページに戻りますか?")){
   navigate("/ReservationPage10")
  }
  }
const BacktoPage11 = () => {
  if(window.confirm("予約のページに戻りますか?")){
   navigate("/ReservationPage11")
  }
  }
const BacktoPage12 = () => {
  if(window.confirm("予約のページに戻りますか?")){
    navigate("/ReservationPage12")
  }
  }
const BacktoPage13 = () => {
  if(window.confirm("予約のページに戻りますか?")){
    navigate("/ReservationPage13")
  }
  }
const BacktoPage14 = () => {
  if(window.confirm("予約のページに戻りますか?")){
   navigate("/ReservationPage14")
  }
  }
const BacktoPage15 = () => {
  if(window.confirm("予約のページに戻りますか?")){
    navigate("/ReservationPage15")
  }
  }
const BacktoPage16 = () => {
  if(window.confirm("予約のページに戻りますか?")){
    navigate("/ReservationPage16")
  }
  }
const BacktoPage17 = () => {
  if(window.confirm("予約のページに戻りますか?")){
     navigate("/ReservationPage17")
  }
  }

   
   return(
    <div>
      <STable border={1}>
        <tr>
         <STd STdColor={colors?.SelectColor || locationState.SelectColor}  >
            {texts?.text || locationState.text} {texts?.text2 || locationState.text2}
          <br />
          </STd>
         </tr>
          <tr>
            <STd STdColor={colors?.SelectColor2 || locationState.SelectColor2} >
             {texts?.text3 ||locationState.text3}  {texts?.text4 ||locationState.text4}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor3 || locationState.SelectColor3}>
              {texts?.text5 ||locationState.text5}  {texts?.text6 ||locationState.text6}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor4 || locationState.SelectColor4} >
              {texts?.text7 ||locationState.text7}  {texts?.text8 ||locationState.text8}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor5 || locationState.SelectColor5} >
              {texts?.text9 ||locationState.text9}  {texts?.text10 ||locationState.text10}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor6 || locationState.SelectColor6} >
              {texts?.text11 || locationState.text11}  {texts?.text12 ||locationState.text12}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor7 || locationState.SelectColor7} >
              {texts?.text13 ||locationState.text13}  {texts?.text14 ||locationState.text14}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor8 || locationState.SelectColor8} >
              {texts?.text15 ||locationState.text15}  {texts?.text16 ||locationState.text16}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor9 || locationState.SelectColor9} >
              {texts?.text17 ||locationState.text17}  {texts?.text18 ||locationState.text18}
              <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor10 || locationState.SelectColor10} >
              {texts?.text19 ||locationState.text19}  {texts?.text20 ||locationState.text20}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor11 || locationState.SelectColor11} >
              {texts?.text21 ||locationState.text21}  {texts?.text22 ||locationState.text22}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor12 || locationState.SelectColor12} >
              {texts?.text23 ||locationState.text23}  {texts?.text24 ||locationState.text24}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor13 || locationState.SelectColor13} >
              {texts?.text25 ||locationState.text25}  {texts?.text26 ||locationState.text26}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor14 || locationState.SelectColor14} >
              {texts?.text27 ||locationState.text27}  {texts?.text28 ||locationState.text28}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor15 || locationState.SelectColor15} >
              {texts?.text29 ||locationState.text29}  {texts?.text30 ||locationState.text30}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor16 || locationState.SelectColor16} >
              {texts?.text31 ||locationState.text31}  {texts?.text32 ||locationState.text32}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor17 || locationState.SelectColor17} >
              {texts?.text33 ||locationState.text33}  {texts?.text34 ||locationState.text34}
            <br />
            </STd>
          </tr>
      </STable>

      <Storedbutton BgColor="" hoverBgColor="green" textColor="" hovertextColor="" onClick={handleStored}>保存します</Storedbutton>
      <Deletebutton BgColor="" hoverBgColor="green" textColor="" hovertextColor="" onClick={handleDeleted}>削除します</Deletebutton>
      <div>
      <Sbutton id="reservebutton"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage}>予約を変更する</Sbutton>
      <Sbutton2 id="reservebutton2"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage2}>予約を変更する</Sbutton2>
      <Sbutton3 id="reservebutton3"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage3}>予約を変更する</Sbutton3>
      <Sbutton4 id="reservebutton4"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage4}>予約を変更する</Sbutton4>
      <Sbutton5 id="reservebutton5"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage5}>予約を変更する</Sbutton5>
      <Sbutton6 id="reservebutton6"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage6}>予約を変更する</Sbutton6>
      <Sbutton7 id="reservebutton7"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage7}>予約を変更する</Sbutton7>
      <Sbutton8 id="reservebutton8"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage8}>予約を変更する</Sbutton8>
      <Sbutton9 id="reservebutton9"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage9}>予約を変更する</Sbutton9>
      <Sbutton10 id="reservebutton10"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage10}>予約を変更する</Sbutton10>
      <Sbutton11 id="reservebutton11"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage11}>予約を変更する</Sbutton11>
      <Sbutton12 id="reservebutton12"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage12}>予約を変更する</Sbutton12>
      <Sbutton13 id="reservebutton13"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage13}>予約を変更する</Sbutton13>
      <Sbutton14 id="reservebutton14"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage14}>予約を変更する</Sbutton14>
      <Sbutton15 id="reservebutton15"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage15}>予約を変更する</Sbutton15>
      <Sbutton16 id="reservebutton16"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage16}>予約を変更する</Sbutton16>
      <Sbutton17 id="reservebutton17"  type="button"   BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={BacktoPage17}>予約を変更する</Sbutton17>
      </div>
      
    </div>
   ) 
}



  export const SBlock  = styled.div`
    height: 55px;
    border: 2.5px solid;
    border-color: #d772ff;
    transform: translateX(500px) translateY(160px) scale(0.8);
    padding-right: 1230px;
`

  const STable = styled.table`
    transform: translateX(279px) translateY(-220px) scale(0.70);
    border-collapse: collapse;
    background-color: #ffffff;
    border-color: purple;
    margin-top: 0;
    border-width: 3px;
    padding-right: 1200px;
    
  `

 const STd = styled.td<Props>`
  padding: 15.467px;
  padding-right: 600px;
  background-color: ${props => props.STdColor|| 'white'};
 `

 const TimeNumber = styled.td`
  padding-right: 30px;
 `
 
 
 export const Storedbutton = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 110px;
  right: -400px;
  /* display: none; */
`
export const Deletebutton = styled.button<Props2>`
border-radius: 16px;
background-color: ${props => props.BgColor || 'white'};
 color: ${props => props.textColor || 'black'};
 &:hover{
  cursor: pointer;
  background-color: ${props => props.hoverBgColor || 'white'};
  color: ${props => props.hovertextColor || 'black'};
 };

 position: fixed;
 top: 110px;
 right: -500px;
 /* display: none; */
`

export const Sbutton = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 110px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton2 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 150px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton3 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 185px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton4 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 223px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton5 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 260px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton6 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 295px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton7 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 333px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton8 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 370px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton9 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 408px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton10 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 445px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton11 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 482px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton12 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 520px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton13 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 555px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton14 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 592px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton15 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 630px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton16 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 667px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`
export const Sbutton17 = styled.button<Props2>`
 border-radius: 16px;
 background-color: ${props => props.BgColor || 'white'};
  color: ${props => props.textColor || 'black'};
  &:hover{
   cursor: pointer;
   background-color: ${props => props.hoverBgColor || 'white'};
   color: ${props => props.hovertextColor || 'black'};
  };

  position: fixed;
  top: 705px;
  right: -180px;
  margin-bottom: 5px;
  /* display: none; */
`




 



