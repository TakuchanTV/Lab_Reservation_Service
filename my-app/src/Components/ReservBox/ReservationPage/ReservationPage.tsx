//ReservationPage.tsx


import { useNavigate, useSearchParams } from "react-router-dom"
import { Sbutton } from "../ReservationDevice";
import styled from "styled-components";
import { Ids } from "../IdModules";
import React, { ChangeEvent } from "react";
import { SelectDays } from "../ReservCustomhooks/SelectDays";
import { SelectTimes } from "../ReservCustomhooks/SelectTimes";



interface Props {
  BgColor?: string,
  textColor?: string,
  hoverBgColor?: string,
  hovertextColor?: string,
}
 
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


 export const ReservationPage1 = () => {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    const text = params.get('q') || '';
    const text2 = params.get('r') || '';
    const SelectColor = params.get('color') || '';
    const Form = params.get('Form') || '';

    

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

    const handleForm = (e:ChangeEvent<HTMLTextAreaElement>) => {
      setParams(prevParams => ({
        ...Object.fromEntries(prevParams),
        Form: e.target.value
      }))
    };
   const CancelConfirm = (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
    if(window.confirm("予約をキャンセルしますか")){
      navigate("/ShowText",{
        state:{
          text:text || '',
          text2:text2 || '',
          SelectColor:SelectColor || '',
        }
      });
      localStorage.removeItem("text")
      localStorage.removeItem("text2")
      localStorage.removeItem("SelectColor")
    }else{ 
      e.preventDefault()
    }
   };
   const returnButton = () => {
    navigate("/")
   }
   const okButton = () => {
   
   if(text === "" && text2 === "" && SelectColor === "") {
    localStorage.removeItem("text")
    localStorage.removeItem("text2")
    localStorage.removeItem("SelectColor")
    console.log("localStorageから削除されました")
   }else{
    localStorage.setItem("text",JSON.stringify(text));
   localStorage.setItem("text2",JSON.stringify(text2));
   localStorage.setItem("SelectColor",JSON.stringify(SelectColor));
   }
    navigate("/ShowText",{
      state:{
        text:text || '',
        text2:text2 || '',
        SelectColor:SelectColor || '',
      }
    });
   };
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
               <STh>予約対象</STh>  <td>{Ids.leftOil}</td>
            </STr>
            <STr>
               <STh>テキスト</STh>  <td><SInput  type="text" value={text}
               onChange={textInput} /></td>
            </STr>
            <STr>
               <STh>予約者（登録者）</STh>  <td><SInput type="text" value={text2}
            onChange={textInput2} /></td>
            </STr>
            <STr>
               <STh>色</STh> <td><input type="color" value={SelectColor}  
               onChange={handleColor} />
               </td>   
            </STr>
            <STr>
              <STh>備考</STh> <td><form>
      <label htmlFor="comment">補足情報</label><br/>
      <textarea  cols={50} rows={9} value={Form}
      onChange={handleForm}></textarea><br/>
    </form></td>
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
 export const SResevButton = styled.button<Props>`
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
