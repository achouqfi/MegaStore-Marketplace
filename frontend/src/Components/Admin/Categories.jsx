import React from 'react'
import SideBar from '../Admin/Sidebar'
import Commandes from './Commandes'
import Table from './Table'

function Categories() {
  return (
    <div className='flex w-full'>
        
      <SideBar/>

      <div className='flex flex-col w-full bg-gray-200 p-10'>
        {/* <h2 className='font-bold text-2xl underline'>Commandes</h2>
        <Commandes/> */}
        <h2 className='font-bold text-2xl underline'>Categories</h2>
        <Table/>

      </div>

    </div>
  )
}

export default Categories