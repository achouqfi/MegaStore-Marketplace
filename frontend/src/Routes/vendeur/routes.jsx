import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../Screens/Client/Home'
import NavBar from "../../Components/Client/NavBar";
import NewsLetters from '../../Components/Client/NewsLetter'
import SideBar from "../../Components/vendeur/SideBar";
import AuthVendeur from '../../Screens/vendeur/AuthVendeur'
import Produit from '../../Screens/vendeur/Produit'
export default function routes() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vendeur/login" element={<AuthVendeur />} />
        <Route path="vendeur/inscription" element={<AuthVendeur />} />
        <Route path="vendeur/produit" element={<Produit />} />
      </Routes>
      {/* <NewsLetters /> */}
    </BrowserRouter>
  );
}
