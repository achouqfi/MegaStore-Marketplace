import React from "react";
import Sidebar from '../../Components/vendeur/Sidebar';
import Count from "../../Components/vendeur/Count";
import Chart from "../../Components/vendeur/Chart";
import Addproduit from "../../Components/vendeur/Addproduit/index";

export default function Dashboard() {

  let path = window.location.pathname
  return (
    <div className='flex w-full'>
                { path == '/vendeur/dashboard' ? 
                <>
                <Sidebar className='fixed'/>
                <div className='flex flex-col w-full bg-gray-200'>
                <Count />
            
                <Chart/>
               </div>
                </>

                :
                  path == '/vendeur/dashboard/produit' ?
                  <>
                  <Sidebar className='fixed'/>
                <div className='flex flex-col w-full bg-gray-200'>
                <Count />
                <Addproduit/>
                </div>
               </>
                
                : 
                null }

                
           
   </div>
     
  );
}

