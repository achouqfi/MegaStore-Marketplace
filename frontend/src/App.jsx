import AdminRoutes from './Routes/Admin/Admin.routes'
import ClientRoutes from './Routes/Clients/routes'
import VendeurRoutes from './Routes/vendeur/routes'
function App() {
  return (
    <div className="App">
      <ClientRoutes />
      <VendeurRoutes />
      <AdminRoutes/>
    </div>
  )
}

export default App
