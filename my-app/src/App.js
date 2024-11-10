//App.js//
import React, { useState } from "react";
import { StyledComponents } from "./Components/TopPageCss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Router } from "./Components/ReservBox/router/Router";
import { ShowText } from "./Components/Explain";
const Home = () =>  {
    return (
      <>

      <div className="App">
        <ShowText />
        {/* <StyledComponents /> */}
      </div>
      </>
    )
       
};


const App = () => {
  


  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    </Routes>
       <Router />
    </BrowserRouter>
  )
}



export default App

