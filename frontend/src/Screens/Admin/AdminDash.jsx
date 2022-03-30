import React from 'react'
import Chart from '../../Components/Admin/Chart'
import Count from '../../Components/Admin/Count'
import Sidebar from '../../Components/Admin/Sidebar'

function AdminDash() {
  return (
    <div className='flex w-full'>

      {/* <div className=' w-full'> */}
        <Sidebar className='fixed'/>
        
        <div className='flex flex-col w-full bg-gray-200'>
          <Count />
          <Chart/>
        </div>

      {/* </div> */}

      
      
    </div>
  )
}

export default AdminDash