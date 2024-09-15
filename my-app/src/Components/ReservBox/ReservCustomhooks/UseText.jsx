import { useState } from "react";

export const UseText = () => {
    const [text, setText ] = useState('');
    return (
        {text, setText}
    ) 
};