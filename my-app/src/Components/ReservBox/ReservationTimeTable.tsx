//ReservationTimeTable.tsx//

import styled from "styled-components"
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import { ReserveTableComponents } from "./ReserveTableComponents.tsx";

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
  text1:string, text2:string,text3:string, text4:string, text5:string, 
  text6:string, text7:string, text8:string,text9:string,text10:string,
    text11:string, text12:string, text13:string, text14:string, text15:string, 
    text16:string, text17:string, text18:string,text19:string,text20:string,
     text21:string, text22:string, text23:string,text24:string, text25:string, 
     text26:string, text27:string, text28:string, text29:string, text30:string,
     text31:string, text32:string, text33:string, text34:string,
};

interface SelectColors {
  SelectColor1:string, SelectColor2:string,SelectColor3:string, SelectColor4:string,SelectColor5:string, 
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
         <STd STdColor={colors?.SelectColor1 || null}  >
            {texts?.text1 || null} {texts?.text2 || null}
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
      <ReserveTableComponents />
        <div>
      <Sbutton type="button" id={`reservebutton1`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(1)}>予約を変更する</Sbutton>
      <Sbutton2  type="button" id={`reservebutton2`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(2)}>予約を変更する</Sbutton2>
      <Sbutton3  type="button" id={`reservebutton3`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(3)}>予約を変更する</Sbutton3>
      <Sbutton4  type="button" id={`reservebutton4`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(4)}>予約を変更する</Sbutton4>
      <Sbutton5  type="button" id={`reservebutton5`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(5)}>予約を変更する</Sbutton5>
      <Sbutton6  type="button" id={`reservebutton6`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(6)}>予約を変更する</Sbutton6>
      <Sbutton7  type="button" id={`reservebutton7`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(7)}>予約を変更する</Sbutton7>
      <Sbutton8  type="button" id={`reservebutton8`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(8)}>予約を変更する</Sbutton8>
      <Sbutton9  type="button" id={`reservebutton9`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(9)}>予約を変更する</Sbutton9>
      <Sbutton10   type="button" id={`reservebutton10`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(10)}>予約を変更する</Sbutton10>
      <Sbutton11   type="button" id={`reservebutton11`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(11)}>予約を変更する</Sbutton11>
      <Sbutton12   type="button" id={`reservebutton12`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(12)}>予約を変更する</Sbutton12>
      <Sbutton13   type="button" id={`reservebutton13`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(13)}>予約を変更する</Sbutton13>
      <Sbutton14   type="button" id={`reservebutton14`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(14)}>予約を変更する</Sbutton14>
      <Sbutton15   type="button" id={`reservebutton15`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(15)}>予約を変更する</Sbutton15>
      <Sbutton16   type="button" id={`reservebutton16`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(16)}>予約を変更する</Sbutton16>
      <Sbutton17   type="button" id={`reservebutton17`}  BgColor="" hoverBgColor="yellow" textColor="" hovertextColor="" onClick={() =>handleBackToPage(17)}>予約を変更する</Sbutton17>
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

  export const STable = styled.table`
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

 export const STd = styled.td<Props>`
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
