//ReservationDevice.jsx//

import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { Ids } from "./IdModules";
export const ReservationList = () => {
   const navigate = useNavigate();
   const handleClick_1 = () =>  {
    navigate("/ReservationPage");
    localStorage.clear()
   }
   const handleClick = () => {
    navigate("/ReservationPage");
   }
   return(
    <>
    <STable border={1}>
      <div>
         <tr>
         <td>
           {Ids.leftOil}
            <br />
            <Link to="/ReservationPage" >
               <Sbutton hoverBgColor="#e85252" onClick={handleClick_1} >予約する</Sbutton>
              </Link>
          </td>
         </tr>
          <tr>
            <td>
             {Ids.middleOil}
              <br />
              <Link to="/ReservationPage2">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.rightOil}
              <br />
              <Link to="/ReservationPage3">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.leftoven}
              <br />
              <Link to="/ReservationPage4">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.rightOven}
              <br />
              <Link to="/ReservationPage5">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.outsideOven}
              <br />
              <Link to="/ReservationPage6">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.leftVacuum}
              <br />
              <Link to="/ReservationPage7">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.middleVacuum}
             <br />
              <Link to="/ReservationPage8">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.rightVacuum}
              <br />
              <Link to="/ReservationPage9">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.hotPress}
              <br />
              <Link to="/ReservationPage10">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.UV}
              <br />
              <Link to="/ReservationPage11">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.autograph}
              <br />
              <Link to="/ReservationPage12">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
             {Ids.TGA}
              <br />
              <Link to="/ReservationPage13">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.DSC60}
              <br />
              <Link to="/ReservationPage14">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.DMA}
              <br />
              <Link to="/ReservationPage15">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.hotStirrer}
              <br />
              <Link to="/ReservationPage16">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              {Ids.Stirrer}
              <br />
              <Link to="/ReservationPage17">
               <Sbutton hoverBgColor="#e85252" onClick={handleClick}>予約する</Sbutton>
              </Link>
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
    transform: translateX(350px) translateY(-220px) scale(0.70);
    border-collapse: collapse;
    background-color: #bae369;
    border-color: purple;
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
