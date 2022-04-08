import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../../Components/SuperAdmin/LoginForm";

 import React from 'react'
 
 function routes() {
   return (
     <BrowserRouter>
     <Routes>
     <Route path="/superadmin" element={<LoginForm/>} />
     
     
     </Routes>
     </BrowserRouter>
   )
 }
  
 export default routes
 