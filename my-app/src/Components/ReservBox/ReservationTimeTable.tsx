//ReservationTimeTable.tsx//

import styled from "styled-components"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React from "react";


interface Props {
  STdColor:string;
};

export const ReservationTimeTable = () => {
  const location = useLocation();

  
  
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

  const locationState:Location = location.state

  const navigate = useNavigate();


  const handleClick = () => {
    if(window.confirm("前のページに戻りますか")) {
      navigate("/ReservationPage")
    }else{
     
    }
    
  }

   return(
    <div>
      <STable border={1}>
       <div>
        <tr>
         <STd STdColor={locationState.SelectColor} >
            {locationState.text} {locationState.text2}
          <br />
          </STd>
         </tr>
          <tr>
            <STd STdColor={locationState.SelectColor2}>
             {locationState.text3}  {locationState.text4}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor3}>
              {locationState.text5}  {locationState.text6}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor4}>
              {locationState.text7}  {locationState.text8}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor5}>
              {locationState.text9}  {locationState.text10}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor6}>
              {locationState.text11}  {locationState.text12}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor7}>
              {locationState.text13}  {locationState.text14}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor8}>
              {locationState.text15}  {locationState.text16}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor9}>
              {locationState.text17}  {locationState.text18}
              <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor10}>
              {locationState.text19}  {locationState.text20}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor11}>
              {locationState.text21}  {locationState.text22}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor12}>
              {locationState.text23}  {locationState.text24}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor13}>
              {locationState.text25}  {locationState.text26}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor14}>
              {locationState.text27}  {locationState.text28}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor15}>
              {locationState.text29}  {locationState.text30}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor16}>
              {locationState.text31}  {locationState.text32}
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={locationState.SelectColor17}>
              {locationState.text33}  {locationState.text34}
            <br />
            </STd>
          </tr>
          </div> 
      </STable>
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
 
 

//  export const Sbutton = styled.button`
//   border-radius: 16px;
//   background-color: ${props => props.BgColor || 'white'};
//    color: ${props => props.textColor || 'black'};
//    &:hover{
//     cursor: pointer;
//     background-color: ${props => props.hoverBgColor || 'white'};
//     color: ${props => props.hovertextColor || 'black'};
//    };
//  `


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
