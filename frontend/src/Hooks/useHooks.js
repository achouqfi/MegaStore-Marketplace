import axios from "axios";

export const login = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/${role}/login`, values)
        .then(res => console.log(res))
        .catch(err=>console.log(err))
};

export const create = async (values, role) => {
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
