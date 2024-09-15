 import styled from "styled-components";
 import { useState } from "react";

 export const SelectTimes = () => {
    const [times, setTimes] = useState('');
    
    const handleChange = (e) => {
      setTimes(e.target.value);
    }
  


    return(
     <Sform>
       <Sinput type="time" value={times} onChange={handleChange} />
     </Sform>
    )
 }
  const Sform = styled.form`
  `


 const Sinput = styled.input`
  transform: translateX(10px);
  margin: 5px;
  padding: 3px;
 `
