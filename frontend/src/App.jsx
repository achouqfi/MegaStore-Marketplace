import AdminRoutes from './Routes/Admin/Admin.routes'
import ClientRoutes from './Routes/Clients/routes'
import VendeurRoutes from './Routes/Vendeur/routes'
import SuperAdminRoutes from './Routes/superAdmin/routes'
import { CardContext } from './Context/CardContext'
import { useState } from "react";

function App() {

  const [dataProduct, setDataProduct] = useState(0);

  return (
    <div className="App">
        <ClientRoutes />
        <VendeurRoutes />
        <AdminRoutes/> 
        <SuperAdminRoutes/>
        
    </div>
  )
}

export default App
