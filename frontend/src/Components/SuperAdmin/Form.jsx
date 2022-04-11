import React from 'react'
import {useState} from 'react'


const Form = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  let admindata = {
    firstname: firstname,
    lastname: lastname,
    email: email
  }
  const senddata =()=>{
  }
  return (
    <div>
<div className="grid min-h-screen place-items-center">
  <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 className="text-xl font-semibold">Hello there 👋, <span className="font-normal">please fill informations to create admin</span></h1>
    <div className="mt-6">
      <div className="flex justify-between gap-3">
        <span className="w-1/2">
          <label for="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
          <input onChange={setFirstname} id="firstname" type="text" name="firstname" placeholder="Firstname" autocomplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
        <span className="w-1/2">
          <label for="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
        <input onChange={setLastname} id="lastname" type="text" name="lastname" placeholder="Lastname" autocomplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
      </div>
      <label for="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
      <input onChange={setEmail} id="email" type="email" name="email" placeholder="x.x@x.x" autocomplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      
      <button onClick={senddata()} type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Creat admin
      </button>
    </div>
  </div>
</div>
    </div>
  )
}
export default Form