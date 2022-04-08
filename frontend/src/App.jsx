import AdminRoutes from './Routes/Admin/Admin.routes'
import ClientRoutes from './Routes/Clients/routes'
import VendeurRoutes from './Routes/Vendeur/routes'
import SuperadmineRoutes from './Routes/superAdmin/routes'
function App() {
  return (
    <div className="App">
      <ClientRoutes />
      {/* <VendeurRoutes /> */}
      {/* <AdminRoutes/> */}
      <SuperadmineRoutes/>
    </div>
  )
}

export default App
