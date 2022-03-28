import React from "react";
import NavBar from "../../Components/Client/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../Screens/Client/Home'
import NewsLetters from '../../Components/Client/NewsLetter'
import AuthClient from '../../Screens/Client/AuthClient'
export default function routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthClient />} />
        <Route path="/inscription" element={<AuthClient />} />
      </Routes>
      <NewsLetters />
    </BrowserRouter>
  );
}
