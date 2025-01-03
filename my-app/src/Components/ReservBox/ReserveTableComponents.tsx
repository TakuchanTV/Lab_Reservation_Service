import React,{ useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"

interface Props {
    STdColor:string|null,
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
  
  
  interface Location extends Texts, SelectColors {}



export  const ReserveTableComponents = () => {
  const [texts, setTexts] = useState<Texts | null>(null);
  const [colors, setColors] = useState<SelectColors | null>(null);
  const location = useLocation();
    const navigate = useNavigate();
  
  
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
        
        const updatedTexts = existingTexts.map((existing) => ({...existing, ...texts}));
        const updatedColor =  {...existingColor,...colors};
        
       
        textKeys.forEach((key,idx) => {
          localStorage.setItem(key,JSON.stringify(updatedTexts[idx]))})
          localStorage.setItem(colorKey,JSON.stringify(updatedColor))
  
          setTexts(prevText => ({...prevText, ...updatedTexts.reduce((acc, curr)=> ({...acc, ...curr}),{})}))
          setColors(prevColor => ({...prevColor, ...updatedColor}))
        
          
     
      };
      
  
      useEffect(() => {
        
        const btn:HTMLInputElement[] = new Array();
        const reservbtn = () => {
          for (let i = 1; i<18; i++){
            const button = document.getElementById(`reservebutton${i}`) as HTMLInputElement
            btn.push(button)
          }
        };
        
        reservbtn();
        console.log(btn);
              
              const StorageKey = () => {
                for(let i = 0; i<18; i++){
                  const textKey1 = `text${i * 2 + 1}`
                  const textKey2 = `text${i * 2 + 2}`
                  const colorKey = `SelectColor${i + 1}`
                  if (btn[i]) {
                    if (localStorage.hasOwnProperty(textKey1) || localStorage.hasOwnProperty(textKey2) || 
                    localStorage.hasOwnProperty(colorKey)) {
                      btn[i].style.display = "block";
                      handleStored(i)
                }else {
                  btn[i].style.display = "none"
                }
              }
            }
          }
            StorageKey();
      },[]) 
  


  if (!locationState) {
    console.error("Location.state is null or undifined");
    return (
        <div>
          <p>
            Loading...
          </p>
        </div>
    )
  }
  return (
      <div>

      <STable border={1}>
      <tr>
        <STd STdColor={colors?.SelectColor1 || locationState.SelectColor1}  >
          {texts?.text1 || locationState.text1} {texts?.text2 || locationState.text2}
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

      </div>
    
  )
}
    const STd = styled.td<Props>`
  padding: 15.467px;
  padding-right: 600px;
  background-color: ${props => props.STdColor|| 'white'}`

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