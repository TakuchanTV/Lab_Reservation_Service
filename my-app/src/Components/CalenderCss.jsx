//CalenderCss.jsx//
import Calendar from "react-calendar"
import styled from "styled-components"

export const StyledCalender = styled(Calendar)`
max-width: 320px;
transform: translateY(150px);
text-align: center;
margin-bottom: 0px;




.react-calendar__month-view__days__day--weekend:nth-child(7n-1){
    color: blue;
}

.react-calendar__month-view__days__day--weekend:nth-child(7n){
    color: red;
}

.react-calendar__tile--active {
    background-color: #cacaca;
    color: #2b2323;
}

`

export const Sdiv = styled.div`
display: flex ;
align-items: flex-end;
height: 0px;

`

export const Sbutton = styled.button`
   transform : translateX(60px) translateY(320px);
   margin: 5px;
   margin-bottom: 90px;
   
   
   border-radius: 16px;
   background-color: ${props => props.BgColor || 'white'};
   color: ${props => props.textColor || 'black'};
   &:hover{
    cursor: pointer;
    background-color: ${props => props.hoverBgColor || 'white'};
    color: ${props => props.hovertextColor || 'black'};
   };
`

