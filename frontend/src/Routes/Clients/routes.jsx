import React from "react";
import NavBar from "../../Components/Client/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../Screens/Client/Home'
import NewsLetters from '../../Components/Client/NewsLetter'
import Login from '../../Components/Client/Forms/LoginForm'
export default function routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <NewsLetters />
    </BrowserRouter>
  );
}
