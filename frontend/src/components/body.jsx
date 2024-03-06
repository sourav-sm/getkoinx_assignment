import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Team from "../Pages/Team";
const Body = ()=>{
    return (
        <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Body />} /> */}
        <Route path="/team" element={<Team />} >Team</Route>
      </Routes>
    </BrowserRouter>
    )
}
export default Body;