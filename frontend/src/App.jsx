import AdminRoutes from './Routes/Admin/Admin.routes'
import ClientRoutes from './Routes/Clients/routes'
function App() {

  return (
    <div className="App">
      <ClientRoutes />
      <AdminRoutes/>
    </div>
  )
}

export default App
