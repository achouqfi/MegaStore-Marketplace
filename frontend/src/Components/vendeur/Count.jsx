import { useState } from "react";
import { useQuery } from "react-query";
// import ConfirmDelete from "../confirmdelete/index.jsx";
// import EditProduit from "../editproduit";
// import Modal from "../Modals/index.jsx";
import axios from "axios";
import { useCookies } from 'react-cookie';

function Count() {

    const [cookies, setCookie, removeCookie] = useCookies();
   

    // console.log(cookies);
    //count categorie
    const query = useQuery("categories", async () => {
        const { data } = await axios.get("http://localhost:4000/api/categories/count");
        return data;
      });
    
    //count produit
     
    const query1 = useQuery("produits", async () => {
        const { data } = await axios.get("http://localhost:4000/api/produits/count/"+cookies.id);
        return data;
      });

    
    //count commande
    
    const query2 = useQuery("commande", async () => {
        const { data } = await axios.get("http://localhost:4000/api/commande/count/"+cookies.id);
        return data;
      });


  return (
    <div className='p-10 w-full'>

        <h2 className='font-bold text-2xl underline'>Welcome Back</h2>

        <div className='flex gap-x-11 w-full mt-5'>

            <div className='w-1/3 bg-gray-50 h-24 text-center p-5 rounded-lg flex '>
                
                <div className='rounded-full w-14 bg-indigo-200 flex-start flex justify-center items-center'>
                    <div className='h-8 w-8'>
                        <svg className="w-8 h-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='flex items-center ml-2 font-bold text-2xl'>{query2.data}</span>
                    <span className='flex items-center ml-2'>Commandes</span>
                </div>
            </div>



            <div className='w-1/3 bg-gray-50 h-24 text-center p-5 rounded-lg flex '>
                
                <div className='rounded-full w-14 bg-indigo-200 flex-start flex justify-center items-center'>
                    <div className='w-8 h-8 mt-2'>
                        <svg className="w-8 h-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='flex items-center ml-2 font-bold text-2xl'>{query1.data}</span>
                    <span className='flex items-center ml-2'>Produits</span>
                </div>
            </div>

            <div className='w-1/3 bg-gray-50 h-24 text-center p-5 rounded-lg flex '>
                
                <div className='rounded-full w-14 bg-indigo-200 flex-start flex justify-center items-center'>
                    <div className='w-8 h-8'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='flex items-center ml-2 font-bold text-2xl'>{query.data}</span>
                    <span className='flex items-center ml-2'>Categories</span>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Count