import AdminRoutes from './Routes/Admin/Admin.routes'
import ClientRoutes from './Routes/Clients/routes'
import VendeurRoutes from './Routes/Vendeur/routes'
import LoginForm from './Components/SuperAdmin/LoginForm'
function App() {
  return (
    <div className="App">
      <ClientRoutes />
      {/* <VendeurRoutes /> */}
      {/* <AdminRoutes/> */}
      <LoginForm />
    </div>
  )
}

export default App
