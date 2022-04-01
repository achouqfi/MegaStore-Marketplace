import React from 'react'
import Chart from '../../Components/Admin/Chart'
import Chart2 from '../../Components/Admin/Chart2'
import Commandes from '../../Components/Admin/Commandes'
import Count from '../../Components/Admin/Count'
import Sidebar from '../../Components/Admin/Sidebar'
import Table from '../../Components/Admin/Table'

function AdminDash() {
  return (
    <div className='flex w-full'>

      <Sidebar className='fixed'/>
      
      <div className='flex flex-col w-full bg-gray-200'>

        <Count />

        <div className="w-full flex">

          <div className="w-2/3">
            <Chart />
          </div>

          <div className="w-1/3">
            <Chart2/>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDash