import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from '../../Components/Admin/Categories'
import AdminDash from '../../Screens/Admin/AdminDash'
import AuthAdmin from '../../Screens/Admin/AuthAdmin'

function AdminRoutes() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/admin" element={<AuthAdmin />} />
        <Route path="/adminDash" element={<AdminDash />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </BrowserRouter>

  )
}

export default AdminRoutes