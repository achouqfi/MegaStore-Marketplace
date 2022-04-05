import { useCookies } from "react-cookie";
import { Navigate, } from "react-router-dom";

const PrivateRoutes = ({role,children}) =>{
    const [cookies, setCookie] = useCookies([]);
    // {cookies.role === role ? children : <Navigate to="/admin" />}
    // if (cookies.role !== role) {
    //     return <Redirect  to ="/admin" />
    //    }
    // return children;
}

export default PrivateRoutes