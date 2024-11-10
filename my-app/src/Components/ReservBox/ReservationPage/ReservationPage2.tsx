//ReservationPage2.tsx//

import { useNavigate, useSearchParams } from "react-router-dom"
import { Sbutton } from "../ReservationDevice";
import styled from "styled-components";
import { FormTextarea } from "../FormTextarea";
import { Ids } from "../IdModules";
import React, {ChangeEvent} from "react";
import { SelectTimes } from "../ReservCustomhooks/SelectTimes";
import { SelectDays } from "../ReservCustomhooks/SelectDays";


interface Props {
  BgColor?: string,
  textColor?: string,
  hoverBgColor?: string,
  hovertextColor?: string,
}


 export const ReservationPage2 = () => {
    const navigate = useNavigate();
    
    const [params, setParams] = useSearchParams();
    const text3 = params.get('q') || '';
    const text4 = params.get('r') || '';
    const SelectColor2 = params.get('color') || '';


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
            text3:text3 || '',
            text4:text4 || '',
            SelectColor2:SelectColor2 || '',
          }
        });
      localStorage.removeItem("text3")
      localStorage.removeItem("text4")
      localStorage.removeItem("SelectColor2")
      }else{ 
        e.preventDefault()
      }
     };
   const returnButton = () => {
    navigate("/")
   }
   const okButton = () => {
    navigate("/ShowText",{
      state:{
        text3:text3 || '',
        text4:text4 || '',
        SelectColor2:SelectColor2 || '',
      }
    })
    if(text3 === "" && text4 === "" && SelectColor2 === "") {
      localStorage.removeItem("text3")
      localStorage.removeItem("text4")
      localStorage.removeItem("SelectColor2")
     }else{
      localStorage.setItem("text3",JSON.stringify(text3));
     localStorage.setItem("text4",JSON.stringify(text4));
     localStorage.setItem("SelectColor2",JSON.stringify(SelectColor2));
     }
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
               <STh>予約対象</STh>  <td>{Ids.middleOil}</td>
            </STr>
            <STr>
               <STh>テキスト</STh>  <td><SInput type="text" value={text3} 
            onChange={textInput} /></td>
            </STr>
            <STr>
               <STh>予約者（登録者）</STh>  <td><SInput  type="text" value={text4} 
               onChange={textInput2} /></td>
            </STr>
            <STr>
               <STh>色</STh> <td><input type="color" value={SelectColor2}  
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
