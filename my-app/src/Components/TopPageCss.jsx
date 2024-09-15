//TopPageCss.jsx//

import React, {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";
import Calendar from "react-calendar";
import { StyledCalender } from "./CalenderCss";
import CalendarPage from "./Calender";
import { ShowText } from "./Explain";


export const StyledComponents = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [navigate, setNavigate] = useState(false);
  
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSpinner){
      const navTimer = setTimeout(() => {
        setNavigate(true);
      }, 3000);
      return () => clearTimeout(navTimer);
    }
  }, [showSpinner]);

  if(navigate){
    return<ShowText />
  }

  if(Stext3 === ''){
    return(
      <SpinnerBox />
    )
  }
    
  
    return(
       <>
        <SContainer>
          <Stext1>皆さん今日もお疲れ様です。</Stext1>  
          <Stext2>お互いより良い研究にしていきましょう</Stext2>
          <Stext3>サイトに移動します</Stext3>
        </SContainer>

        {showSpinner &&(
         <SpinnerBox className="spinner-box">
           <PulseContainer className="pulse-container">  
            <PulseBubble1 className="pulse-bubble pulse-bubble-1"></PulseBubble1>
            <PulseBubble2 className="pulse-bubble pulse-bubble-2"></PulseBubble2>
            <PulseBubble3 className="pulse-bubble pulse-bubble-3"></PulseBubble3>
          </PulseContainer>
        </SpinnerBox> 
        )}

        </>
    );
    
};




const SContainer = styled.div`
    background-color: #ce23a3;
    text-align: center;
`



const fadeIn = keyframes`
     
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }  
    
`;



const Pulse = keyframes`
   from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
`
 



const StextBase = styled.p`
  color: orange;
    font-size: 35px;
    text-shadow: 0 0 0 transparent;
    transition:  text-shadow 0.5s ease;
   
`


const Stext1  = styled(StextBase)`
     position: relative;
     z-index: 1;
    
   animation: ${fadeIn} 1s ease-in-out forwards;
`;

const Stext2 = styled(StextBase)`
    
    
   animation: ${fadeIn} 3s ease-in-out forwards;
`
const Stext3 = styled(StextBase)`
  animation: ${fadeIn} 4.5s ease-in-out forwards;
`


const SpinnerBox = styled.div`
  width: 300px;
  height: 300px;
  padding-left: 450px;
  transform: translateY(-100px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`



const PulseContainer = styled.div`
   width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

` 
 
const PulseBubble1 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3ff9dc;

    animation: ${Pulse} .4s ease 0s infinite alternate;
` 

const PulseBubble2 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3ff9dc;

    animation: ${Pulse} .4s ease .2s infinite alternate;
`

const PulseBubble3 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3ff9dc;

    animation: ${Pulse} .4s ease .4s infinite alternate;

`