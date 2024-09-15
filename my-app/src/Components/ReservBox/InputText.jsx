import { useSearchParams } from "react-router-dom";
import { UseText } from "./ReservCustomhooks/UseText";

export const InputText = () => {
    const {text,setText} = UseText();

    const handleText = (e) => {
        setText(e.target.value)
    };


    return(
      <>
      <form>
        <input type="text" value={text}  onChange={handleText}  />
      </form>
       
      </>
      
    )
};

