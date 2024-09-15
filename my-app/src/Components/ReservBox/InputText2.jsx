import { UseText2 } from "./ReservCustomhooks/UseText2";
export const InputText2 = () => {
    const {text2,setText2} = UseText2();

    const handleText2 = (e) => {
      setText2(e.target.value)
    };

    return(
      <form>
        <input type="text" value={text2}  onChange={handleText2}  />
      </form>  
    )
}