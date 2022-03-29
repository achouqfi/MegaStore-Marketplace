import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'

function AdminRoutes() {
  return (
    
    <BrowserRouter>

        <Routes>
            <Route path="/admin" element={<Sidebar />} />
        </Routes>

    </BrowserRouter>

  )
}

export default AdminRoutes