import { useState } from "react";

export const UseText2 = () => {
    const [text2, setText2 ] = useState('');
    return (
        {text2, setText2}
    ) 
};