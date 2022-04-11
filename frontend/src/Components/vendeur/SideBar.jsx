import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import {  useMutation } from "react-query";
import { Field, Form, Formik } from "formik";


function Sidebar() {

    // const { dataProduct, setDataProduct } = useContext(CardContext)
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
  
    const logoutMutation = useMutation(
      () => removeCookie("id"),{
        onSuccess: () => {
          navigate("/vendeur/login");
        }
      }
    )


  return ( 
    <Formik

        onSubmit={async () => {
          logoutMutation.mutate();
        }}
    >
    {/* {({ errors, touched }) => ( */}
        <Form>
            <div className="flex flex-col h-screen sticky border-r dark:bg-gray-800 dark:border-gray-600">
    
    <div className="flex items-center justify-center bg-indigo-500 w-20 h-20 ">
        
    
        <a className="flex items-center text-indigo-600 rounded-md justify-center h-11 my-4" href=" /vendeur/dashboard">
        <h2 className="text-3xl font-semibold text-gray-800 mr-1">M-S</h2>
         </a>
       
    </div>
    
    <div className="flex flex-col justify-between flex-1 bg-gray-700 px-4 py-10 w-20">
        <nav>
            <a className="flex items-center text-indigo-600 bg-gray-50 rounded-md justify-center h-11 my-4" href="/vendeur/dashboard/produit">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </a>
    
            <hr className="my-6 border-gray-200 dark:border-gray-600" />
     
           <button type="submit" className="flex items-center text-gray-50 rounded-md hover:bg-gray-50 hover:text-indigo-700 justify-center h-11">
             <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-box-arrow-right w-5 h-5" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
            </button> 
            
        </nav>
    
    </div>
    </div>
        </Form>
    {/* )} */}
    </Formik>
  )
}

export default Sidebar


