import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../../Components/SuperAdmin/LoginForm";
import AdminGestion from "../../Screens/SuperAdmin/AdminGestion";

 import React from 'react'
 
 function routes() {
   return (
     <BrowserRouter>
     <Routes>
     <Route path="/superadmin" element={<LoginForm/>} />
     <Route path="/superadmindash" element={<AdminGestion/>} />
     
     
     </Routes>
     </BrowserRouter>
   )
 }
  
 export default routes
 