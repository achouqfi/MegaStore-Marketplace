import React from "react";
import { useState,useEffect } from "react";
import {drop} from '../../Hooks/useHooks'
import axios from "axios";


function Table() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
    .get("http://localhost:4000/api/admin/")
    .then((res) => {
      setData(res.data);
    })
  }, []);

  const deleteAdmin = (id) => {
    
    axios
        .delete(`http://localhost:4000/api/admin/delete/${id}`)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
  }

 

  
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8 w-3/4">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Firts name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Lastname
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((Admin) => (
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0"></div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {Admin.firstName}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {Admin.lastName}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {Admin.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relativ ">active</span>
                          </span>
                        </td>
                        <td className="px-5 flex py-5 border-b border-gray-200 bg-white text-sm">
                          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Accepter
                          </button>
                          <button onClick={()=>deleteAdmin(Admin._id)} className="bg-red-700  text-white font-semibold  py-2 px-4 border border-white hover:border-transparent rounded">
                            supprimer
                          </button>

                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
