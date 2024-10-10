//ReservationTimeTable.tsx//

import styled from "styled-components"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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

interface Location extends Texts, SelectColors {}

export const ReservationTimeTable = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [texts, setTexts] = useState<Texts | null>(null);
  const [colors, setColors] = useState<SelectColors | null>(null);

  useEffect(() => {
    const storedTexts = localStorage.getItem("Texts");
    const storedColors = localStorage.getItem("SelectColors");

    if (storedTexts && storedColors) {
      setTexts(JSON.parse(storedTexts));
      setColors(JSON.parse(storedColors));
    }
  },[])


  const locationState:Location | null = location.state;

  if (!locationState) {
    console.error("Location.state is null or undifined");
    return null;
  }


  // const MyComponents = () => {
  //   useEffect(() => {
  //     loadStoredData()
  //   },[])
  // }

  const handleClick = () => {
    if(window.confirm("前のページに戻りますか")) {
      navigate("/ReservationPage")
    }else{
     
    }
    
  }

  const handleStored = () => {
    const existingTexts = JSON.parse(localStorage.getItem("Texts") || "{}");
    const existingColors = JSON.parse(localStorage.getItem("SelectColors") || "{}");
    
    const texts: Texts = locationState;
    const colors: SelectColors = locationState;

    const updatedTexts = {...existingTexts,...texts}
    const updatedColors = {...existingColors,...colors}
    
    localStorage.setItem("Texts",JSON.stringify(updatedTexts));
    localStorage.setItem("SelectColors",JSON.stringify(updatedColors))
    
}

const handleDeleted = () => {
 localStorage.removeItem("Texts");
 localStorage.removeItem("SelectColors")

 setTexts(null);
 setColors(null);
}



// const loadStoredData = () => {
//   const storedTexts = localStorage.getItem("Texts");
//   const storedColors = localStorage.getItem("SelectColors");

//   if (storedTexts && storedColors) {
//     const texts: Texts = JSON.parse(storedTexts);
//     const colors: SelectColors = JSON.parse(storedColors);

//     // 取得したデータを使用して必要な処理を行う
//     console.log("Loaded Texts:", texts);
//     console.log("Loaded SelectColors:", colors);
//   }
// }

   
   return(
    <div>
      <STable border={1}>
        <tr>
         <STd STdColor={colors?.SelectColor || "white"} >
            {texts?.text || "予約欄です"} {texts?.text2 || "予約欄です"}
          <br />
          </STd>
         </tr>
          <tr>
            <STd STdColor={colors?.SelectColor2 || locationState.SelectColor2}>
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
            <STd STdColor={colors?.SelectColor4 || locationState.SelectColor4}>
              {texts?.text7 ||locationState.text7}  {texts?.text8 ||locationState.text8}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor5 || locationState.SelectColor5}>
              {texts?.text9 ||locationState.text9}  {texts?.text10 ||locationState.text10}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor6 || locationState.SelectColor6}>
              {texts?.text11 || locationState.text11}  {texts?.text12 ||locationState.text12}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor7 || locationState.SelectColor7}>
              {texts?.text13 ||locationState.text13}  {texts?.text14 ||locationState.text14}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor8 || locationState.SelectColor8}>
              {texts?.text15 ||locationState.text15}  {texts?.text16 ||locationState.text16}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor9 || locationState.SelectColor9}>
              {texts?.text17 ||locationState.text17}  {texts?.text18 ||locationState.text18}
              <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor10 || locationState.SelectColor10}>
              {texts?.text19 ||locationState.text19}  {texts?.text20 ||locationState.text20}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor11 || locationState.SelectColor11}>
              {texts?.text21 ||locationState.text21}  {texts?.text22 ||locationState.text22}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor12 || locationState.SelectColor12}>
              {texts?.text23 ||locationState.text23}  {texts?.text24 ||locationState.text24}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor13 || locationState.SelectColor13}>
              {texts?.text25 ||locationState.text25}  {texts?.text26 ||locationState.text26}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor14 || locationState.SelectColor14}>
              {texts?.text27 ||locationState.text27}  {texts?.text28 ||locationState.text28}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor15 || locationState.SelectColor15}>
              {texts?.text29 ||locationState.text29}  {texts?.text30 ||locationState.text30}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor16 || locationState.SelectColor16}>
              {texts?.text31 ||locationState.text31}  {texts?.text32 ||locationState.text32}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={colors?.SelectColor17 || locationState.SelectColor17}>
              {texts?.text33 ||locationState.text33}  {texts?.text34 ||locationState.text34}
            <br />
            </STd>
          </tr>
      </STable>

      <Sbutton BgColor="" hoverBgColor="green" textColor="" hovertextColor="" onClick={handleStored}>保存します</Sbutton>
      <Sbutton2 BgColor="" hoverBgColor="green" textColor="" hovertextColor="" onClick={handleDeleted}>削除します</Sbutton2>
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
   right: -275px;
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
  top: 110px;
  right: -380px;
  /* display: none; */
`


// const [stored, setStored] = useState({
//   text: "",
//   text2: "",
//   SelectColor : "",
// });

// useEffect(() => {
// setStored({
//   text: localStorage.getItem('text',text) || text,
//   text2: localStorage.getItem('text2',text2) || text2,
//   SelectColor: localStorage.getItem('SelectColor',SelectColor) || SelectColor
// });
// },[text,text2,SelectColor])

// useEffect(() => {
// localStorage.setItem('text',stored.text)
// localStorage.setItem('text2',stored.text2)
// localStorage.setItem('SelectColor',stored.SelectColor)

// },[stored])



// const loadStoredData = () => {
//   const storedTexts = localStorage.getItem("Texts");
//   const storedColors = localStorage.getItem("SelectColors");

//   if (storedTexts && storedColors) {
//     const texts: Texts = JSON.parse(storedTexts);
//     const colors: SelectColors = JSON.parse(storedColors);

//     // 取得したデータを使用して必要な処理を行う
//     console.log("Loaded Texts:", texts);
//     console.log("Loaded SelectColors:", colors);
//   }
// }

// const MyComponents = () => {
  //   useEffect(() => {
  //     loadStoredData()
  //   },[])
  // }