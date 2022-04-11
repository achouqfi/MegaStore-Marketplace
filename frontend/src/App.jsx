import AdminRoutes from './Routes/Admin/Admin.routes'
import ClientRoutes from './Routes/Clients/routes'
import VendeurRoutes from './Routes/Vendeur/routes'
import SuperAdminRoutes from './Routes/superAdmin/routes'
import { CardContext } from './Context/CardContext'
import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()
function App() {

  
  const [dataProduct, setDataProduct] = useState(0);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ClientRoutes />
        <VendeurRoutes />
        <AdminRoutes/> 
        <SuperAdminRoutes/>
      </QueryClientProvider>
        
    </div>
  )
}

export default App
