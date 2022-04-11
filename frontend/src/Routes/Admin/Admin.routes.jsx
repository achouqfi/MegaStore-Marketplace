import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from '../../Components/Admin/Categories'
import AdminDash from '../../Screens/Admin/AdminDash'
import AuthAdmin from '../../Screens/Admin/AuthAdmin'
// import PrivateRoutes from './PrivateRoutes'

function AdminRoutes() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/admin" element={<AuthAdmin />} />

        <Route path="/adminDash" element={
          // <PrivateRoutes role='admin'>
            <AdminDash />
          // </PrivateRoutes>
        }/>

        <Route path="/categories" element={
          // <PrivateRoutes role='admin'> 
            <Categories />
          // </PrivateRoutes>
        }/>

      </Routes>

    </BrowserRouter>

  )
}

export default AdminRoutes