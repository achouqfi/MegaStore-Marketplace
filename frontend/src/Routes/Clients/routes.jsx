import React from "react";
import NavBar from "../../Components/Client/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../Screens/Client/Home'
import NewsLetters from '../../Components/Client/NewsLetter'
import AuthClient from '../../Screens/Client/AuthClient'
import Products from '../../Screens/Client/Products'
import { useContext } from "react";
import { CardContext } from '../../Context/CardContext'


export default function routes() {
  let path = window.location.pathname
  return (
    <BrowserRouter>
       { path == '/login' || path == '/inscription' || path == '/products'  || path == '/' && <NavBar /> } 
      {/* <NavBar />  */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthClient />} />
          <Route path="/products" element={<Products />} />
          <Route path="/inscription" element={<AuthClient />} />
      </Routes>
       { path == '/login' || path == '/inscription' ||  path == '/' || path == '/products'  && <NewsLetters /> } 
      {/* <NewsLetters /> */}
    </BrowserRouter>
  );
}
