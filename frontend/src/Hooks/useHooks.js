import axios from "axios";
import {useCookies} from 'react-cookie';



export const login = async (values, role) => {
    // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    axios
        .post(`http://localhost:4000/api/${role}/login`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
    
};

export const create = async (values, role) => {
    // console.log(values,role);
    axios
        .post(`http://localhost:4000/api/${role}/store`, values)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
};

export const drop = async (id, role) => {
    axios
        .delete(`http://localhost:4000/api/${role}/${id}`)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
};

export const update = async (values,id, role) => {

    // console.log(id,role, values)
    axios
        .put(`http://localhost:4000/api/${role}/${id}`,values)
        .then(res => console.log(res))
        .catch(err=>console.log(err))
};