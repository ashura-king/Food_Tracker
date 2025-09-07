import React from "react";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register"
import Front from '../Components/Front'
import { Route, Routes } from "react-router-dom";


const AppRouter = () =>{
  return (
    <Routes>
      {/*Landing Page */}
      <Route path="/" element={<Front/>}/>
      {/*Login & Register */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}