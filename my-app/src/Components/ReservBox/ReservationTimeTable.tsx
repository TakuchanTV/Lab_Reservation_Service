//ReservationTimeTable.tsx//

import styled from "styled-components"
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

interface Props {
  STdColor:string|null,
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

  const locationState:Location | null = location.state;
  const ToShowText = () => {
    navigate("/ShowText",{
      state:{
        texts,
        colors
      }})}

      const handleStored = (index:number) => {
      const textKeys = [`text${index * 2 + 1}`, `text${index * 2 + 2}`];
      const colorKey = `SelectColor${index + 1}`;

      const existingTexts = textKeys.map(key => JSON.parse(localStorage.getItem(key) || "{}")); 
      const existingColor = JSON.parse(localStorage.getItem(colorKey) || "{}")

      const texts: Texts | null = locationState; 
      const colors: SelectColors | null = locationState;

      const updatedTexts = existingTexts.map((existing,idx) => ({...existing, ...texts}));
      const updatedColor =  {...existingColor,...colors};

      textKeys.forEach((key,idx) => {
        localStorage.setItem(key,JSON.stringify(updatedTexts[idx]))})
        localStorage.setItem(colorKey,JSON.stringify(updatedColor))

        setTexts(prevText => ({...prevText, ...updatedTexts.reduce((acc, curr)=> ({...acc, ...curr}),{})}))
        setColors(prevColor => ({...prevColor, ...updatedColor}))
    };
  
    useEffect(() => {
      const button = [
        "reservebutton", 
        "reservebutton2", 
        "reservebutton3", 
        "reservebutton4", 
        "reservebutton5", 
        "reservebutton6", 
        "reservebutton7",
         "reservebutton8", 
         "reservebutton9", 
         "reservebutton10", 
         "reservebutton11", 
         "reservebutton12", 
         "reservebutton13", 
         "reservebutton14", 
         "reservebutton15", 
         "reservebutton16", 
         "reservebutton17"
      ];
      button.forEach((buttonId,index) => {
        const button = document.getElementById(buttonId) as HTMLInputElement;
        if (button) {
          const textKey1 = `text${index * 2 + 1}`
          const textKey2 = `text${index * 2 + 2}`
          const ColorKey = `text${index + 1}`
          if (localStorage.hasOwnProperty(textKey1) || localStorage.hasOwnProperty(textKey2) || 
          localStorage.hasOwnProperty(ColorKey) ) {
            button.style.display = "block";
            handleStored(index);
          } else {
            button.style.display = "none";
          }
        }
      })
    },[locationState]) 
 
  
  
  const Shotexbtn = styled.button`
  position: fixed;
  top: 40px;
  right: 40px;
`

  if (!locationState) {
    console.error("Location.state is null or undifined");
    return (
       <div>
        <Shotexbtn onClick={ToShowText}>ShowTextに遷移します</Shotexbtn>
      <STable border={1}>
        <tr>
         <STd STdColor={colors?.SelectColor || null}  >
            {texts?.text || null} {texts?.text2 || null}
          <br />
          </STd>
         </tr>
          <tr>
            <STd STdColor={colors?.SelectColor2 || null} >
             {texts?.text3 ||null}  {texts?.text4 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor3 || null}>
              {texts?.text5 ||null}  {texts?.text6 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor4 || null} >
              {texts?.text7 ||null}  {texts?.text8 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor5 || null} >
              {texts?.text9 ||null}  {texts?.text10 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor6 || null} >
              {texts?.text11 || null}  {texts?.text12 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor7 || null} >
              {texts?.text13 ||null}  {texts?.text14 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor8 || null} >
              {texts?.text15 ||null}  {texts?.text16 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor9 || null} >
              {texts?.text17 ||null}  {texts?.text18 ||null}
              <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor10 || null} >
              {texts?.text19 ||null}  {texts?.text20 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor11 || null} >
              {texts?.text21 ||null}  {texts?.text22 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor12 || null} >
              {texts?.text23 ||null}  {texts?.text24 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor13 || null} >
              {texts?.text25 ||null}  {texts?.text26 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor14 || null} >
              {texts?.text27 ||null}  {texts?.text28 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor15 || null} >
              {texts?.text29 ||null}  {texts?.text30 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor16 || null} >
              {texts?.text31 ||null}  {texts?.text32 ||null}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor17 || null} >
              {texts?.text33 ||null}  {texts?.text34 ||null}
            <br />
            </STd>
          </tr>
      </STable>
      </div>
    ) ;
    }
 

   const handleBackToPage = (pageNumber: number) => {
    if (window.confirm("予約のページに戻りますか")) {
      navigate(`/ReservationPage${pageNumber}`)
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
            <STd STdColor={colors?.SelectColor9 || null} >
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
          <div>
        {[...Array(17)].map((_,index) => (
          <>
      <Sbutton type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton>
      <Sbutton2  type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton2>
      <Sbutton3  type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton3>
      <Sbutton4  type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton4>
      <Sbutton5  type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton5>
      <Sbutton6  type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton6>
      <Sbutton7  type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton7>
      <Sbutton8  type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton8>
      <Sbutton9  type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton9>
      <Sbutton10   type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton10>
      <Sbutton11   type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton11>
      <Sbutton12   type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton12>
      <Sbutton13   type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton13>
      <Sbutton14   type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton14>
      <Sbutton15   type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton15>
      <Sbutton16   type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton16>
      <Sbutton17   type="button" id={`reservebutton${index + 1}`} key={index} BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(index + 1)}>予約を変更する</Sbutton17>
      </>
    ))}
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
    transform: scale(0.70);
    border-collapse: collapse;
    background-color: #ffffff;
    border-color: purple;
    border-width: 3px;
    padding-right: 1200px;
    position : relative;
    bottom: 20px;
    left: 230px;
  `

 const STd = styled.td<Props>`
  padding: 15.467px;
  padding-right: 600px;
  background-color: ${props => props.STdColor|| 'white'};
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
  top: 130px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 165px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 202px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 240px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 275px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 314px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 350px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 385px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 425px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 460px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 495px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 533px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 570px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 605px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 643px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 680px;
  right: -100px;
  margin-bottom: 5px;
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
  top: 715px;
  right: -100px;
  margin-bottom: 5px;
`
