import React, { useEffect, useState } from 'react'
import Modal from '../vendeur/Modals'
import AddCategory from './AddCategory'
import axios from 'axios'

function Table() {

    const [open , setIsOpen] = useState(false);
    const [category , setIsCategory] = useState();

  // ------------------ fetch ------------------
    const AllCategories = () => {
        axios.get('http://localhost:4000/api/categories/')
        .then(res => setIsCategory(res.data))
        .catch(err => console.warn(err))
    }

    useEffect(()=>{
        AllCategories();
    },[]);
    
  // ------------------ delete ------------------
  
    const deleteRow =(id) => {
        if (window.confirm("Are you sure you want to delete this Category ?")){
            axios.delete(`http://localhost:4000/api/categories/${id}`)
            .then(res => AllCategories())
            .catch(err=> console.log(err))
      
        }
    }
 
  return (
    <div className='flex flex-col'>
        <div className='flex justify-end w-9/12 ml-36'>
            <button onClick={() => setIsOpen(!open)} className='flex rounded-md bg-indigo-600 text-white hover:bg-gray-50 hover:text-indigo-600 jutify-center items-center px-11 py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            <span className='ml-2'>Add a Category</span>
            </button>
        </div>
        <div className='p-5 flex justify-center items-center'>

            <div className='p-2 bg-gray-50 rounded-md shadow-md	flex items-center justify-center w-9/12'>

                <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
                    <thead className="text-gray-500 bg-gray-100">
                        <tr>
                            <th className="p-3 ">Category</th>
                            <th className="p-3 ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category && category.map((el,index) => 
                            <tr className="bg-gray-100 text-gray-500" key={index}>
                                <td className="p-3 h-16">
                                    <div className="flex items-center justify-center mt-2">
                                        {el.Name}
                                    </div>
                                </td>
                                <td className="p-3 flex items-center justify-center mt-2">
                                    <div className='flex '>
                                        <button onClick={()=>deleteRow(el._id)} className='mx-2 w-11 h-11 text-red-500 bg-red-200 rounded-md flex items-center justify-center hover:bg-red-600 hover:text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </button>

                                        <button className='w-11 h-11 text-blue-500 bg-blue-200 rounded-md flex items-center justify-center hover:bg-blue-600 hover:text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                        </button>

                                    </div>
                                </td>
                                
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>

        </div>
        <Modal isOpen={open}
            title="add Category"
            setIsOpen={setIsOpen}
            component={<AddCategory categories={AllCategories} isOpen={open} setIsOpen={setIsOpen}  />} 
        />

    </div>
  )
}

export default Table