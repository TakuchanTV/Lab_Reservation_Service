import { useState } from "react";

export const SelectDays = () => {
    const [days, setDays] = useState("");

    const handleDays = (e) => {
        setDays(e.target.value)
    }

    return (
        <form>
          <input type="date" value={days} onChange={handleDays}></input>  
        </form>
    );
};