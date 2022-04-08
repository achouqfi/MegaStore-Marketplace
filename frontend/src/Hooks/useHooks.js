import axios from "axios";
import Cookies from 'universal-cookie';
import {Navigate} from 'react-router-dom';
const cookies = new Cookies();


export const login = async (values, role,destination) => {
     axios
        .post(`http://localhost:4000/api/${role}/login`, values)
        .then(
            res=>cookies.set('data',JSON.stringify(res.data))
            )

        .then(window.location.href=`/${destination}`)
        .catch(err=>console.log(err))
        
        console.log(cookies.get('data').role);
    
};

export const create = async (values, role) => {
    // console.log(values, role, 'vendeurs')
    axios
        .post(`http://localhost:4000/api/${role}/store`, values)
        .then(res => console.log(res))
        .catch(err=>console.log(err))
};

export const drop = async (id, role) => {
    axios
        .delete(`http://localhost:4000/api/${role}/${id}`)
        .then(res => console.log(res))
        .catch(err=>console.log(err))
};

export const update = async (id, role) => {
    axios
        .update(`http://localhost:4000/api/${role}/${id}`)
        .then(res => console.log(res))
        .catch(err=>console.log(err))
};