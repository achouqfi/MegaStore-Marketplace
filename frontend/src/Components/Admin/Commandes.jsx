import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DayJS from 'react-dayjs';

function Commandes() {

 // ----------------------- fetch -----------------------

    const [commandes, setCommandes] = useState()

    const allCmd=()=>{
        axios('http://localhost:4000/api/commande/')
        .then(res=> setCommandes(res.data))
        .catch(err=> console.warn(err))
    }

    useEffect(()=>{
        allCmd()
    },[])

 // ----------------------- update status -----------------------
    const updateStatus = (id,value) => {   

        axios.put(`http://localhost:4000/api/commande/${id}`,{status:value})
        .then(res=> allCmd())
        .catch(err=> console.warn(err))

    }


  return (
    <div className='p-5 flex '>

        <div className='p-2 bg-gray-50 rounded-md shadow-md w-full flex-col'>
            
            <div class="h-12 flex justify-between items-center justify-center w-full mt-5 mb-4 ">
                <div className='w-full bg-gray-100 flex rounded-md shadow-md mt-5 h-11 justify-between px-20 ml-4'>
                    <p className=' flex items-center justify-center ml-10'>Product</p>
                    <p className=' flex items-center justify-center ml-32'>Status</p>
                    <p className=' flex items-center justify-center ml-36 mr-6'>Date</p>
                    <p className=' flex items-center justify-center '>Action</p>
                </div>
            </div>

            {commandes && commandes.map((el,index)=>
           
                <div class="h-12 flex justify-between items-center justify-center w-full mt-5 mb-4" key={index}>
                    <p className=' flex items-center justify-center ml-4 rounded-md shadow-md mt-5 h-11 w-80 bg-gray-100 gap-x-2'>{el.produit} <span className='font-bold underline'>x{el.quantite}</span> </p>
                    <p className=' flex items-center justify-center ml-4 rounded-md shadow-md mt-5 h-11 w-80 bg-gray-100'><span className={el.status === 'en cours' ? 'bg-yellow-400 px-8 rounded-full pb-1': el.status === 'Accepted' ? 'bg-green-400 px-8 rounded-full pb-1' : el.status === 'Refused' ? 'bg-red-400 px-8 rounded-full pb-1' : null}>{el.status}</span></p>
                    <p className=' flex items-center justify-center ml-4 rounded-md shadow-md mt-5 h-11 w-80 bg-gray-100'><DayJS format='ddd/MMM/YYYY'>{el.date}</DayJS></p>
                    <div className='order-last mt-4'>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2" onClick={()=>updateStatus(el._id,'Accepted')}>
                            Accept
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2" onClick={()=>updateStatus(el._id,'Refused')}>
                            Refuse
                        </button>
                    </div>
                </div>
            )}

        </div>

    </div>
  )
}

export default Commandes