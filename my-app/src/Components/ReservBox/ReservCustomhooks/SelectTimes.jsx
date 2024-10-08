import styled from "styled-components";
import { useState } from "react";

export const SelectTimes = () => {
    const [times, setTimes] = useState("")
    const handleTimes = (e) => {
        setTimes(e.target.value);
    }
    return (
        <form>
           <SInput type="time" value={times} onChange={handleTimes} /> 
        </form>
    )
}
const SInput = styled.input`
    transform: translateX(10px);
    margin: 5px;
    padding: 3px;
`