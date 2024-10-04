//ReservationTimeTable.jsx//

import styled from "styled-components"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export const ReservationTimeTable = () => {
  const location = useLocation();
  const { text, text2, text3, text4, text5, text6, text7, text8,text9,text10,
    text11, text12, text13, text14, text15, text16, text17, text18,text19,text20,
     text21, text22, text23,text24, text25, text26, text27, text28, text29, text30,
     text31, text32, text33, text34, 

     SelectColor, SelectColor2, SelectColor3, SelectColor4,SelectColor5,SelectColor6,
     SelectColor7, SelectColor8, SelectColor9, SelectColor10, SelectColor11, SelectColor12,
     SelectColor13, SelectColor14, SelectColor15, SelectColor16, SelectColor17, 
     } = location.state || {};
  console.log(location);

  const navigate = useNavigate();

  const [stored, setStored] = useState(() => ({
   text: localStorage.getItem('text') || text,
   text2: localStorage.getItem('text2') || text2,
   SelectColor: localStorage.getItem('SelectColor') || SelectColor,
  }
  ))

  useEffect(() => {
    
    localStorage.setItem('text',stored.text)
    localStorage.setItem('text2',stored.text2)
    localStorage.setItem('SelectColor',stored.SelectColor)
  },[stored])

 console.log('text', stored.text)
 console.log('text2', stored.text2)
 console.log('SelectColor', stored.SelectColor)

  const handleClick = () => {
    if(window.confirm("前のページに戻りますか")) {
      navigate("/ReservationPage")
    }else{
     
    }
    
  }

 
   
     
  

   return(
    <>
      <STable border={1}>
       <div>
        <tr>
         <STd STdColor={stored.SelectColor} onClick={handleClick} >
            {stored.text} {stored.text2}
          <br />
          </STd>
         </tr>
          <tr>
            <STd STdColor={SelectColor2}>
             <NavLink to= {-1}>
             {text3}  {text4}
             </NavLink> 
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor3}>
              <NavLink to={-1}>
              {text5}  {text6}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor4}>
            <NavLink to={-1}>
              {text7}  {text8}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor5}>
            <NavLink to={-1}>
              {text9}  {text10}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor6}>
            <NavLink to={-1}>
              {text11}  {text12}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor7}>
            <NavLink to={-1}>
              {text13}  {text14}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor8}>
            <NavLink to={-1}>
              {text15}  {text16}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor9}>
            <NavLink to={-1}>
              {text17}  {text18}
            </NavLink>            
              <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor10}>
            <NavLink to={-1}>
              {text19}  {text20}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor11}>
            <NavLink to={-1}>
              {text21}  {text22}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor12}>
            <NavLink to={-1}>
              {text23}  {text24}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor13}>
            <NavLink to={-1}>
              {text25}  {text26}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor14}>
            <NavLink to={-1}>
              {text27}  {text28}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor15}>
            <NavLink to={-1}>
              {text29}  {text30}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor16}>
            <NavLink to={-1}>
              {text31}  {text32}
              </NavLink>
            <br />
            </STd>
          </tr>
          <tr>
            <STd STdColor={SelectColor17}>
            <NavLink to={-1}>
              {text33}  {text34}
              </NavLink>
            <br />
            </STd>
          </tr>
          </div> 
      </STable>
    </>
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

 const STd = styled.td`
  padding: 15.467px;
  padding-right: 600px;
  background-color: ${props => props.STdColor || 'white'};
  
 `

 const TimeNumber = styled.td`
  padding-right: 30px;
 `
 
 

 export const Sbutton = styled.button`
  border-radius: 16px;
  background-color: ${props => props.BgColor || 'white'};
   color: ${props => props.textColor || 'black'};
   &:hover{
    cursor: pointer;
    background-color: ${props => props.hoverBgColor || 'white'};
    color: ${props => props.hovertextColor || 'black'};
   };
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
