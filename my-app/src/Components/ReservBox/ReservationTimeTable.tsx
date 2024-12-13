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
  const [locations, setLocations] = useState({
    text: "" ,text2: "" ,text3: "" ,text4: "" ,text5: "" ,text6: "" ,text7: "" ,text8: "" ,text9: "" ,text10: "",
    text11:"", text12:"", text13:"", text14:"", text15:"", text16:"", text17:"", text18:"",text19:"",text20:"",
     text21:"", text22:"", text23:"",text24:"", text25:"", text26:"", text27:"", text28:"", text29:"", text30:"",
     text31:"", text32:"", text33:"", text34:"",
     SelectColor: "",SelectColor2: "",SelectColor3: "",SelectColor4: "",SelectColor5: "",SelectColor6: "",SelectColor7: "",
     SelectColor8: "",SelectColor9: "",SelectColor10: "",SelectColor11: "",SelectColor12: "",SelectColor13: "",SelectColor14: "",
     SelectColor15: "",SelectColor16: "",SelectColor17: "",
  })

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
    
    if (button){
      if (localStorage.hasOwnProperty("text") || localStorage.hasOwnProperty("text2") 
        || localStorage.hasOwnProperty("SelectColor")) {
           button.style.display = "block"
          handleStored();
        }else {
        button.style.display = "none"
        }
    }
    if (button2){
      if (localStorage.hasOwnProperty("text3") || localStorage.hasOwnProperty("text4") 
        || localStorage.hasOwnProperty("SelectColor2")){
         button2.style.display = "block"
        handleStored2();
      }else {
        button2.style.display = "none"
      } 
    }
    if (button3){
      if (localStorage.hasOwnProperty("text5") || localStorage.hasOwnProperty("text6") 
        || localStorage.hasOwnProperty("SelectColor3")){
        button3.style.display = "block"
        handleStored3();
      }else {
        button3.style.display = "none"
      }
    }
     if (button4) {
      if (localStorage.hasOwnProperty("text7") || localStorage.hasOwnProperty("text8") 
        || localStorage.hasOwnProperty("SelectColor4")){
        button4.style.display = "block"
        handleStored4();
      }else {
        button4.style.display = "none"
      }
     }
      if (button5){
        if (localStorage.hasOwnProperty("text9") || (localStorage.hasOwnProperty("text10")
          || localStorage.hasOwnProperty("SelectColor5"))){
           button5.style.display = "block"
           handleStored5();
         }else {
           button5.style.display = "none"
         }
      }
      if (button6){
        if (localStorage.hasOwnProperty("text11") || (localStorage.hasOwnProperty("text12")) ||
        (localStorage.hasOwnProperty("SelectColor6"))){
          button6.style.display = "block"
          handleStored6();
       }else {
         button6.style.display = "none"
       }
      }
      if (button7){
         if (localStorage.hasOwnProperty("text13") || localStorage.hasOwnProperty("text14") ||
          localStorage.hasOwnProperty("SelectColor7")) {
          button7.style.display = "block"; handleStored7(); 
        } else {
           button7.style.display = "none"; 
        } 
      }
          if (button8){
            if (localStorage.hasOwnProperty("text15") || (localStorage.hasOwnProperty("text16")) ||
            (localStorage.hasOwnProperty("SelectColor8"))){
             button8.style.display = "block"
             handleStored8();
        }else{
             button8.style.display = "none"
        }
      }
      if (button9){
        if ((localStorage.hasOwnProperty("text17")) || (localStorage.hasOwnProperty("text18")) ||
        (localStorage.hasOwnProperty("SelectColor9"))){
         button9.style.display = "block"
         handleStored9();
       }else {
        button9.style.display = "none"
       }
      }
      if (button10){
        if ((localStorage.hasOwnProperty("text19")) || (localStorage.hasOwnProperty("text20")) ||
        (localStorage.hasOwnProperty("SelectColor10"))){
        button10.style.display = "block"
        handleStored10();
       }else {
         button10.style.display = "none"
       }
      }
      if (button11){
        if ((localStorage.hasOwnProperty("text21")) || (localStorage.hasOwnProperty("text22")) ||
        (localStorage.hasOwnProperty("SelectColor11"))){
         button11.style.display = "block"
         handleStored11();
       }else {
          button11.style.display = "none"
       }
      }
      if (button12){
        if ((localStorage.hasOwnProperty("text23")) || (localStorage.hasOwnProperty("text24")) ||
        (localStorage.hasOwnProperty("SelectColor12"))){
          button12.style.display = "block"
          handleStored12();
       }else {
         button12.style.display = "none"
       }
      }
      if (button13){
        if ((localStorage.hasOwnProperty("text25")) || (localStorage.hasOwnProperty("text26")) ||
        (localStorage.hasOwnProperty("SelectColor13"))){
         button13.style.display = "block"
         handleStored13();
       }else {
         button13.style.display = "none"
       }
      }
      if (button14){
        if ((localStorage.hasOwnProperty("text27")) || (localStorage.hasOwnProperty("text28")) ||
        (localStorage.hasOwnProperty("SelectColor14"))){
        button14.style.display = "block"
        handleStored14();
       }else {
         button14.style.display = "none"
       }
      }
      if (button15){
        if ((localStorage.hasOwnProperty("text29")) || (localStorage.hasOwnProperty("text30")) ||
        (localStorage.hasOwnProperty("SelectColor15"))){
         button15.style.display = "block"
         handleStored15();
       }else {
        button15.style.display = "none"
       }
      }
      if (button16){
        if ((localStorage.hasOwnProperty("text31")) || (localStorage.hasOwnProperty("text32")) ||
        (localStorage.hasOwnProperty("SelectColor16"))){
        button16.style.display = "block"
        handleStored16();
       }else {
         button16.style.display = "none"
       }
      }
      if (button17){
        if ((localStorage.hasOwnProperty("text33")) || (localStorage.hasOwnProperty("text34")) ||
        (localStorage.hasOwnProperty("SelectColor17"))){
         button17.style.display = "block"
         handleStored17();
       }else {
         button17.style.display = "none"
       } 
      }
    },
    []);
  
  const locationState:Location | null = location.state;
  const ToShowText = () => {
    navigate("/ShowText",{
      state:{
        texts,
        colors
      } 
    }
    )
  }
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
  const handleStored6 = () => {

  const existingText11 = JSON.parse(localStorage.getItem("text11") || "{}");
  const existingText12 = JSON.parse(localStorage.getItem("text12") || "{}");
  const existingColor6 = JSON.parse(localStorage.getItem("SelectColor6") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText11 = { ...existingText11, ...texts };
  const updatedText12 = { ...existingText12, ...texts };
  const updatedColor6 = { ...existingColor6, ...colors };

  localStorage.setItem("text11", JSON.stringify(updatedText11));
  localStorage.setItem("text12", JSON.stringify(updatedText12));
  localStorage.setItem("SelectColor6", JSON.stringify(updatedColor6));
  setTexts(prevText11 => ({...prevText11,...updatedText11}))
  setTexts(prevText12 => ({...prevText12,...updatedText12}))
  setColors(prevColor6 => ({...prevColor6,...updatedColor6}))
}
  const handleStored7 = () => {

  const existingText13 = JSON.parse(localStorage.getItem("text13") || "{}");
  const existingText14 = JSON.parse(localStorage.getItem("text14") || "{}");
  const existingColor7 = JSON.parse(localStorage.getItem("SelectColor7") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText13 = { ...existingText13, ...texts };
  const updatedText14 = { ...existingText14, ...texts };
  const updatedColor7 = { ...existingColor7, ...colors };

  localStorage.setItem("text13", JSON.stringify(updatedText13));
  localStorage.setItem("text14", JSON.stringify(updatedText14));
  localStorage.setItem("SelectColor7", JSON.stringify(updatedColor7));
  setTexts(prevText13 => ({...prevText13,...updatedText13}))
  setTexts(prevText14 => ({...prevText14,...updatedText14}))
  setColors(prevColor7 => ({...prevColor7,...updatedColor7}))
}
  const handleStored8 = () => {

  const existingText15 = JSON.parse(localStorage.getItem("text15") || "{}");
  const existingText16 = JSON.parse(localStorage.getItem("text16") || "{}");
  const existingColor8 = JSON.parse(localStorage.getItem("SelectColor8") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText15 = { ...existingText15, ...texts };
  const updatedText16 = { ...existingText16, ...texts };
  const updatedColor8 = { ...existingColor8, ...colors };

  localStorage.setItem("text15", JSON.stringify(updatedText15));
  localStorage.setItem("text16", JSON.stringify(updatedText16));
  localStorage.setItem("SelectColor8", JSON.stringify(updatedColor8));
  setTexts(prevText15 => ({...prevText15,...updatedText15}))
  setTexts(prevText16 => ({...prevText16,...updatedText16}))
  setColors(prevColor8 => ({...prevColor8,...updatedColor8}))
}
  const handleStored9 = () => {

  const existingText17 = JSON.parse(localStorage.getItem("text17") || "{}");
  const existingText18 = JSON.parse(localStorage.getItem("text18") || "{}");
  const existingColor9 = JSON.parse(localStorage.getItem("SelectColor9") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText17 = { ...existingText17, ...texts };
  const updatedText18 = { ...existingText18, ...texts };
  const updatedColor9 = { ...existingColor9, ...colors };

  localStorage.setItem("text17", JSON.stringify(updatedText17));
  localStorage.setItem("text18", JSON.stringify(updatedText18));
  localStorage.setItem("SelectColor9", JSON.stringify(updatedColor9));
  setTexts(prevText17 => ({...prevText17,...updatedText17}))
  setTexts(prevText18 => ({...prevText18,...updatedText18}))
  setColors(prevColor9 => ({...prevColor9,...updatedColor9}))
}
  const handleStored10 = () => {

  const existingText19 = JSON.parse(localStorage.getItem("text19") || "{}");
  const existingText20 = JSON.parse(localStorage.getItem("text20") || "{}");
  const existingColor10 = JSON.parse(localStorage.getItem("SelectColor10") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText19 = { ...existingText19, ...texts };
  const updatedText20 = { ...existingText20, ...texts };
  const updatedColor10 = { ...existingColor10, ...colors };

  localStorage.setItem("text19", JSON.stringify(updatedText19));
  localStorage.setItem("text20", JSON.stringify(updatedText20));
  localStorage.setItem("SelectColor10", JSON.stringify(updatedColor10));
  setTexts(prevText19 => ({...prevText19,...updatedText19}))
  setTexts(prevText20 => ({...prevText20,...updatedText20}))
  setColors(prevColor10 => ({...prevColor10,...updatedColor10}))
}
  const handleStored11 = () => {

  const existingText21 = JSON.parse(localStorage.getItem("text21") || "{}");
  const existingText22 = JSON.parse(localStorage.getItem("text22") || "{}");
  const existingColor11 = JSON.parse(localStorage.getItem("SelectColor11") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText21 = { ...existingText21, ...texts };
  const updatedText22 = { ...existingText22, ...texts };
  const updatedColor11 = { ...existingColor11, ...colors };

  localStorage.setItem("text21", JSON.stringify(updatedText21));
  localStorage.setItem("text22", JSON.stringify(updatedText22));
  localStorage.setItem("SelectColor11", JSON.stringify(updatedColor11));
  setTexts(prevText21 => ({...prevText21,...updatedText21}))
  setTexts(prevText22 => ({...prevText22,...updatedText22}))
  setColors(prevColor11 => ({...prevColor11,...updatedColor11}))
}
  const handleStored12 = () => {

  const existingText23 = JSON.parse(localStorage.getItem("text23") || "{}");
  const existingText24 = JSON.parse(localStorage.getItem("text24") || "{}");
  const existingColor12 = JSON.parse(localStorage.getItem("SelectColor12") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText23 = { ...existingText23, ...texts };
  const updatedText24 = { ...existingText24, ...texts };
  const updatedColor12 = { ...existingColor12, ...colors };

  localStorage.setItem("text23", JSON.stringify(updatedText23));
  localStorage.setItem("text24", JSON.stringify(updatedText24));
  localStorage.setItem("SelectColor12", JSON.stringify(updatedColor12));
  setTexts(prevText23 => ({...prevText23,...updatedText23}))
  setTexts(prevText24 => ({...prevText24,...updatedText24}))
  setColors(prevColor12 => ({...prevColor12,...updatedColor12}))
}
  const handleStored13 = () => {

  const existingText25 = JSON.parse(localStorage.getItem("text25") || "{}");
  const existingText26 = JSON.parse(localStorage.getItem("text26") || "{}");
  const existingColor13 = JSON.parse(localStorage.getItem("SelectColor13") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText25 = { ...existingText25, ...texts };
  const updatedText26 = { ...existingText26, ...texts };
  const updatedColor13 = { ...existingColor13, ...colors };

  localStorage.setItem("text25", JSON.stringify(updatedText25));
  localStorage.setItem("text26", JSON.stringify(updatedText26));
  localStorage.setItem("SelectColor13", JSON.stringify(updatedColor13));
  setTexts(prevText25 => ({...prevText25,...updatedText25}))
  setTexts(prevText26 => ({...prevText26,...updatedText26}))
  setColors(prevColor13 => ({...prevColor13,...updatedColor13}))
}
  const handleStored14 = () => {

  const existingText27 = JSON.parse(localStorage.getItem("text27") || "{}");
  const existingText28 = JSON.parse(localStorage.getItem("text28") || "{}");
  const existingColor14 = JSON.parse(localStorage.getItem("SelectColor14") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText27 = { ...existingText27, ...texts };
  const updatedText28 = { ...existingText28, ...texts };
  const updatedColor14 = { ...existingColor14, ...colors };

  localStorage.setItem("text27", JSON.stringify(updatedText27));
  localStorage.setItem("text28", JSON.stringify(updatedText28));
  localStorage.setItem("SelectColor14", JSON.stringify(updatedColor14));
  setTexts(prevText27 => ({...prevText27,...updatedText27}))
  setTexts(prevText28 => ({...prevText28,...updatedText28}))
  setColors(prevColor14 => ({...prevColor14,...updatedColor14}))
}
  const handleStored15 = () => {

  const existingText29 = JSON.parse(localStorage.getItem("text29") || "{}");
  const existingText30 = JSON.parse(localStorage.getItem("text30") || "{}");
  const existingColor15 = JSON.parse(localStorage.getItem("SelectColor15") || "{}");
  
  const texts: Texts = locationState;
  const colors: SelectColors = locationState;

  const updatedText29 = { ...existingText29, ...texts };
  const updatedText30 = { ...existingText30, ...texts };
  const updatedColor15 = { ...existingColor15, ...colors };

  localStorage.setItem("text29", JSON.stringify(updatedText29));
  localStorage.setItem("text30", JSON.stringify(updatedText30));
  localStorage.setItem("SelectColor15", JSON.stringify(updatedColor15));
  setTexts(prevText29 => ({...prevText29,...updatedText29}))
  setTexts(prevText30 => ({...prevText30,...updatedText30}))
  setColors(prevColor15 => ({...prevColor15,...updatedColor15}))
}
const handleStored16 = () => {
  const existingText31 = JSON.parse(localStorage.getItem("text31") || "{}");
  const existingText32 = JSON.parse(localStorage.getItem("text32") || "{}");
  const existingColor16 = JSON.parse(localStorage.getItem("SelectColor16") || "{}");

  const texts: Texts = locationState;
  const colors: SelectColors = locationState;
  const updatedText31 = { ...existingText31, ...texts };
  const updatedText32 = { ...existingText32, ...texts };
  const updatedColor16 = { ...existingColor16, ...colors };

  localStorage.setItem("text31", JSON.stringify(updatedText31));
  localStorage.setItem("text32", JSON.stringify(updatedText32));
  localStorage.setItem("SelectColor16", JSON.stringify(updatedColor16));

  setTexts(prevText31 => ({...prevText31, ...updatedText31}));
  setTexts(prevText32 => ({...prevText32, ...updatedText32}));
  setColors(prevColor16 => ({...prevColor16, ...updatedColor16}));
}
const handleStored17 = () => {
  const existingText33 = JSON.parse(localStorage.getItem("text33") || "{}");
  const existingText34 = JSON.parse(localStorage.getItem("text34") || "{}");
  const existingColor17 = JSON.parse(localStorage.getItem("SelectColor17") || "{}");

  const texts: Texts = locationState;
  const colors: SelectColors = locationState;
  const updatedText33 = { ...existingText33, ...texts };
  const updatedText34 = { ...existingText34, ...texts };
  const updatedColor17 = { ...existingColor17, ...colors };

  localStorage.setItem("text33", JSON.stringify(updatedText33));
  localStorage.setItem("text34", JSON.stringify(updatedText34));
  localStorage.setItem("SelectColor17", JSON.stringify(updatedColor17));

  setTexts(prevText33 => ({...prevText33, ...updatedText33}));
  setTexts(prevText34 => ({...prevText34, ...updatedText34}));
  setColors(prevColor17 => ({...prevColor17, ...updatedColor17}));
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
    transform: scale(0.70);
    border-collapse: collapse;
    background-color: #ffffff;
    border-color: purple;
    border-width: 3px;
    padding-right: 1200px;
    position : relative;
    bottom: 220px;
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
