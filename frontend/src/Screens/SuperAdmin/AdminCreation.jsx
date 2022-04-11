import React from 'react'
import Sidebar from '../../Components/SuperAdmin/Sidebar'
import Table from '../../Components/SuperAdmin/Table'
import Form from '../../Components/SuperAdmin/Form'


const AdminCreation = () => {
  return (
    <div className='flex bg-gray-100'>
        <Sidebar/>
        <div className='w-full'>
        <Form/> 
        </div>
        
    </div>
  )
}

export default AdminCreation