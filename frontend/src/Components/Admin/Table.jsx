import React from 'react'

function Table() {
  return (
    <div className='p-5'>

        <div className='p-2 bg-gray-50 rounded-md shadow-md	flex items-center justify-center'>

            <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
                <thead className="text-gray-500 bg-gray-100">
                    <tr>
                        <th className="p-3 ">Brand</th>
                        <th className="p-3 ">Category</th>
                        <th className="p-3 ">Price</th>
                        <th className="p-3 ">Status</th>
                        <th className="p-3 ">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100">
                        <td className="p-3 h-16">
                            <div className="flex items-center justify-center mt-2">
                                {/* <img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/> */}
                                <div className="ml-3">
                                    {/* <div className="">Appple</div> */}
                                    <div className="text-gray-500">mail@rgmail.com</div>
                                </div>
                            </div>
                        </td>
                        <td className="p-3 flex items-center justify-center mt-2">
                            Technology
                        </td>
                        <td className="p-3 font-bold justify-center">
                            200.00$
                        </td>
                        <td className="p-3">
                            <span className="bg-green-400 text-gray-50 rounded-md px-2 ">available</span>
                        </td>
                        <td className="p-3 flex justify-center ">
                            <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                <i className="material-icons-outlined text-base">visibility</i>
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-3 h-16">
                            <div className="flex items-center justify-center">
                                <div className="ml-3">
                                    <div className="text-gray-500">mail@rgmail.com</div>
                                </div>
                            </div>
                        </td>
                        <td className="p-3 flex items-center justify-center mt-2">
                            Technology
                        </td>
                        <td className="p-3 font-bold">
                            200.00$
                        </td>
                        <td className="p-3">
                            <span className="bg-red-400 text-gray-50 rounded-md px-2">no stock</span>
                        </td>
                        <td className="p-3">
                            <a href="#" className="text-gray-400 hover:text-gray-100  mr-2">
                                <i className="material-icons-outlined text-base">visibility</i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                                <i className="material-icons-outlined text-base">edit</i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                                <i className="material-icons-round text-base">delete_outline</i>
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="p-3 h-16">
                            <div className="flex align-items-center justify-center">
                                {/* <img className="rounded-full h-12 w-12   object-cover" src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80" alt="unsplash image"/> */}
                                <div className="ml-3">
                                    {/* <div className="">Samsung</div> */}
                                    <div className="text-gray-500">mail@rgmail.com</div>
                                </div>
                            </div>
                        </td>
                        <td className="p-3 flex justify-center items-center mt-2">
                            Technology
                        </td>
                        <td className="p-3 font-bold">
                            200.00$
                        </td>
                        <td className="p-3">
                            <span className="bg-yellow-400 text-gray-50  rounded-md px-2">start sale</span>
                        </td>
                        <td className="p-3">
                            <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                <i className="material-icons-outlined text-base">visibility</i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                                <i className="material-icons-outlined text-base">edit</i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                                <i className="material-icons-round text-base">delete_outline</i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    </div>
  )
}

export default Table