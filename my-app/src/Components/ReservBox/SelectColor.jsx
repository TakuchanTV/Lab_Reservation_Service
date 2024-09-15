import { useState } from "react";

export const SelectColor = () => {
    const [color, setColor] = useState('');

    const handleColor = (e) => {
       setColor(e.target.value); 
    }

   return(
    <form>
      <input  type="color" value={color} onChange={handleColor}/>  
    </form>
   )


}

