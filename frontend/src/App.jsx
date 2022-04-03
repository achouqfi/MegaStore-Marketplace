import AdminRoutes from './Routes/Admin/Admin.routes'
import ClientRoutes from './Routes/Clients/routes'
import VendeurRoutes from './Routes/Vendeur/routes'
import { CardContext } from './Context/CardContext'
import { useState } from "react";

function App() {

  const [dataProduct, setDataProduct] = useState(0);

  return (
    <div className="App">
      <CardContext.Provider value={{ dataProduct, setDataProduct }} >
        <ClientRoutes />
        {/* <VendeurRoutes />*/}
        <AdminRoutes/> 
      </CardContext.Provider>
    </div>
  )
}

export default App
