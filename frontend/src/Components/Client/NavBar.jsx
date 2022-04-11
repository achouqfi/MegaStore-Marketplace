import React from "react";
import { Link, Navigate } from 'react-router-dom';
import Logo from '../../Assets/logo.jpg'
import Uk from '../../Assets/uk.png'
import Fr from '../../Assets/fr.png'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { CardContext } from '../../Context/CardContext'
import { useContext } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import {  useMutation } from "react-query";

export default function NavBar() {
  const { dataProduct, setDataProduct } = useContext(CardContext)
  // const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  // const logoutMutation = useMutation(
  //   () => removeCookie(),{
  //     onSuccess: () => {
  //       navigate("/");
  //     }
  //   }
  // )

  // const { t } = useTranslation();
  // function handleClick(lang) {
  //   i18next.changeLanguage(lang)
  // }
  
  return (
    <div className="container mx-auto p-5">
    <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
      <div className="flex flex-row justify-center">
      <img src={Logo} className="w-10 h-10" />
        <h1 className="text-3xl text-gray-600 ml-2">MegaStore </h1>
      </div>
      <div className="mt-2">
        <Link to="/" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">{t('Navbar.1')}</Link>
        <Link to="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">{t('Navbar.2')}</Link>
        <Link to="/products" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">{t('Navbar.3')}</Link>
        <Link to="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">{t('Navbar.4')}</Link>
        <a href="#" className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {dataProduct}
        </a>
        {/* { cookies.role.role === 'client' ?( */}
          <Link to="/login" className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-3 px-6 text-gray-50 uppercase ml-4 md:self-start ">
            {t('Navbar.5')}
          </Link>
        {/* // ): cookies.role.role === 'client' ? ( */}
        {/* //   <button onClick={logoutMutation.mutate()} className="bg-gradient-to-r from-red-700 to-pink-700 rounded-full py-3 px-6 text-gray-50 uppercase ml-3 md:self-start ">
        //     {t('Navbar.7')}
        //   </button> */}
        {/* ):null} */}

          <button className="ml-6" onClick={()=>handleClick('en')} >
            <img src={Uk} alt="fr" height={20} width={20} />
          </button>
          
          <button className="ml-2"  onClick={()=>handleClick('ko')} >
            <img src={Fr} alt="fr" height={20} width={20} />
          </button>
      </div>

    </div>
    </div>
  );
}
