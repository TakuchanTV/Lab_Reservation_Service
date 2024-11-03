

//ReservationPage17.jsx//

import { useNavigate, useSearchParams } from "react-router-dom"
import { Sbutton } from "../ReservationDevice";
import styled from "styled-components";
import { SelectTimes } from "../ReservCustomhooks/SelectTimes";
import { FormTextarea } from "../FormTextarea";
import { SelectDays } from "../ReservCustomhooks/SelectDays";
import { Ids } from "../IdModules";
import React, {ChangeEvent} from "react";

interface Props {
  BgColor?: string,
  textColor?: string,
  hoverBgColor?: string,
  hovertextColor?: string,
}


 export const ReservationPage17 = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const text33 = params.get('q') || '';
    const text34 = params.get('r') || '';
    const SelectColor17 = params.get('color') || '';

    
  

    const textInput = (e:ChangeEvent<HTMLInputElement>) => {
      setParams(prevParams => ({
        ...Object.fromEntries(prevParams),
        q: e.target.value
      }))
    };
    
    const textInput2 = (e:ChangeEvent<HTMLInputElement>) => {
      setParams(prevParams => ({
        ...Object.fromEntries(prevParams),
        r: e.target.value
      }))
    };
  
    const handleColor = (e:ChangeEvent<HTMLInputElement>) => {
      setParams(prevParams => ({
        ...Object.fromEntries(prevParams),
        color: e.target.value
      }))
    };
    
    const CancelConfirm = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
      if(window.confirm("予約をキャンセルしますか")){
        navigate("/ShowText",{
          state:{
            text33:text33 || '',
            text34:text34 || '',
            SelectColor17:SelectColor17 || '',
          }
        });
      }else{ 
        e.preventDefault()
      }
     };
   const returnButton = () => {
    navigate("/")
   }
   const okButton = () => {
    if(text33 === "" && text34 === "" && SelectColor17 === "") {
      localStorage.removeItem("text33")
      localStorage.removeItem("text34")
      localStorage.removeItem("SelectColor17")
      console.log("localStorageから削除されました")
     }else{
      localStorage.setItem("text33",JSON.stringify(text33));
     localStorage.setItem("text34",JSON.stringify(text34));
     localStorage.setItem("SelectColor17",JSON.stringify(SelectColor17));
     }
    navigate("/ShowText",{
      state:{
        text33:text33 || '',
        text34:text34 || '',
        SelectColor17:SelectColor17 || '',
      }
    })
   }
    return (
      <div>
        <div>
          <h3>新規予約</h3>  
          <h4>管理者からのメッセージ</h4>
          <SUl>
            <li>日をまたいで予約する場合はその日の24時まで予約した後に翌日の0時から続きを予約</li>
            <li>オーブン・乾燥機はテキスト欄に使用温度を記入</li>
            <li>オイルバスで窒素ガスを使う場合はテキスト欄に「窒素」と入力</li>
            <li>予約をキャンセルする場合はサイト上で予約を削除してください</li>
          </SUl>
          <table border={1}   color="bule">
            <STr>
               <STh>日付</STh>  <td><SelectDays /></td> 
            </STr>
            <STr>
               <STh>時刻</STh>  <STd><Selectdiv><SelectTimes /><SelectTimes /></Selectdiv></STd>
            </STr>
            <STr>
               <STh>予約対象</STh>  <td>{Ids.Stirrer}</td>
            </STr>
            <STr>
               <STh>テキスト</STh>  <td><SInput type="text" value={text33} 
            onChange={textInput} /></td>
            </STr>
            <STr>
               <STh>予約者（登録者）</STh>  <td><SInput id="text2" type="text" value={text34} 
               onChange={textInput2} /></td>
            </STr>
            <STr>
               <STh>色</STh> <td><input type="color" value={SelectColor17}  
               onChange={handleColor} />
               </td>                    
            </STr>
            <STr>
              <STh>備考</STh> <td><FormTextarea /></td>
            </STr>
          </table>
          <ResrvButtondiv>
            <SResevButton hoverBgColor="#f48f8f"onClick={okButton}>OK</SResevButton>
            <SResevButton hoverBgColor="#72b6ff" onClick={CancelConfirm}>キャンセル</SResevButton>
          </ResrvButtondiv>
          {/* <Sbutton onClick={returnButton} >戻る</Sbutton> */}
        </div>
  </div>
    )
}
const SUl = styled.ul`
 list-style-type: square;
 margin: 50px;
`
const STh = styled.th`
  padding-right: 240px;
  background-color: #bef5f4;
  margin: 50px;
`
const STr = styled.tr`
  margin-right: 40px;
`
 const SResevButton = styled.button<Props>`
  margin: 5px;
  border-radius: 16px;
  text-align  : center ;
  background-color: ${props => props.BgColor || 'white'};
   color: ${props => props.textColor || 'black'};
   &:hover{
    cursor: pointer;
    background-color: ${props => props.hoverBgColor || 'white'};
    color: ${props => props.hovertextColor || 'black'};
   };
 `

 const ResrvButtondiv = styled.div`
 `
const SInput = styled.input`
  padding: 5px 100px;
`
const STd = styled.td`
`
const Selectdiv = styled.div`
display: flex;
align-items: center;
gap: 40px;

`
