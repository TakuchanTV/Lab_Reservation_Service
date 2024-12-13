//ReservationDevice.jsx//

import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { Ids } from "./IdModules";
export const ReservationList = () => {
   const navigate = useNavigate();
   const handleClick_leftOil = () =>  {
    navigate("/ReservationPage");
    localStorage.removeItem("text","text2","SelectColor")
   };
    const handleClick_middleOil = () => {
      navigate("/ReservationPage2");
      localStorage.removeItem("text3","text4","SelectColor2")
    };
    const handleClick_rightOil = () => {
      navigate("/ReservationPage3");
      localStorage.removeItem("text5","text6","SelectColor3");
    };
    const handleClick_leftOven = () => {
      navigate("/ReservationPage4");
      localStorage.removeItem("text7","text8","SelectColor4");
    };
    const handleClick_rightOven = () => {
      navigate("/ReservationPage5");
      localStorage.removeItem("text9","text10","SelectColor5");
    };
    const handleClick_outsideOven = () => {
      navigate("/ReservationPage6");
      localStorage.removeItem("text11","text12","SelectColor6");
    };
    const handleClick_leftVacuum = () => {
      navigate("/ReservationPage7");
      localStorage.removeItem("text13","text14","SelectColor7");
    };
    const handleClick_middleVacuum = () => {
      navigate("/ReservationPage8");
      localStorage.removeItem("text15","text16","SelectColor8");
    };
    const handleClick_rightVacuum = () => {
      navigate("/ReservationPage9");
      localStorage.removeItem("text17","text18","SelectColor9");
    };
    const handleClick_hotPress = () => {
      navigate("/ReservationPage10");
      localStorage.removeItem("text19","text20","SelectColor10");
    };
    const handleClick_UV = () => {
      navigate("/ReservationPage11");
      localStorage.removeItem("text21","text22","SelectColor11");
    };
    const handleClick_autograph = () => {
      navigate("/ReservationPage12");
      localStorage.removeItem("text23","text24","SelectColor12");
    };
    const handleClick_TGA = () => {
      navigate("/ReservationPage13");
      localStorage.removeItem("text25","text26","SelectColor13");
    };
    const handleClick_DSC60 = () => {
      navigate("/ReservationPage14");
      localStorage.removeItem("text27","text28","SelectColor14");
    };
    const handleClick_DMA = () => {
      navigate("/ReservationPage15");
      localStorage.removeItem("text29","text30","SelectColor15");
    };
    const handleClick_hotStirrer = () => {
      navigate("/ReservationPage16");
      localStorage.removeItem("text31","text32","SelectColor16");
    };
    const handleClick_Stirrer = () => {
      navigate("/ReservationPage17");
      localStorage.removeItem("text33","text34","SelectColor17");
    };

   
   return(
    <>
    <STable border={1}>
      <div>
         <tr>
         <td>
           {Ids.leftOil}
            <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_leftOil} >予約する</Sbutton>
          </td>
         </tr>
          <tr>
            <td>
             {Ids.middleOil}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_middleOil}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.rightOil}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_rightOil}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.leftoven}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_leftOven}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.rightOven}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_rightOven}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.outsideOven}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_outsideOven}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.leftVacuum}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_leftVacuum}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.middleVacuum}
             <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_middleVacuum}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.rightVacuum}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_rightVacuum}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.hotPress}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_hotPress}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.UV}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_UV}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.autograph}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_autograph}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.TGA}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_TGA}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.DSC60}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_DSC60}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.DMA}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_DMA}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.hotStirrer}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_hotStirrer}>予約する</Sbutton>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.Stirrer}
              <br />
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_Stirrer}>予約する</Sbutton>
            </td>
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
    transform: scale(0.70);
    border-collapse: collapse;
    background-color: #bae369;
    border-color: purple;
    position: relative;
    bottom: 220px;
    left: 362px;
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


// const Button = document.getElementById("myButton");

// export const ShowButton = () => {
//   Button.addEventListener('click', () => {
//    const keyArray = Object.values(Ids);
//    console.log(keyArray)
//   } )
// }
