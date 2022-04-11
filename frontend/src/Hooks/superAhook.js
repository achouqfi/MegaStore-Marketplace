// import axios from "axios";
// import { useState,useEffect } from "react";

// export function getData(url, method, data) {
//       const [data, setData] = useState();

//     useEffect(() => {
//           axios
//           .get("http://localhost:4000/api/admin/")
//           .then((res) => {
//           setData(res.data);
//           })
//         }, []);
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useCookies } from "react-cookie";
import axios from "axios";

export const MutateData = () => {
  const queryClient = useQueryClient();

  const deleteAdmin = useMutation(
    (id) =>    axios
    .delete(`http://localhost:4000/api/admin/delete/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('admin');
      },
    }
     
  );
  const addAdmin = useMutation(
    (values) => axios.post(`http://localhost:4000/api/admin/store`, values),
    {
        onSuccess: () => {
            queryClient.invalidateQueries('admin');
        },
    }
    );

  return { deleteAdmin ,addAdmin };
};

export const LoginMutation = (url) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [error, setError] = useState("");
  const updateStatus = useMutation(() =>
    axios.post(`http://localhost:4000/api/appointments/updateNotVaccinated`)
  );

  const loginMutation = useMutation(
    (values) => axios.post(`http://localhost:4000/api/${user}/login`, values),
    {
      onSuccess: async (data) => {
        setCookie("user", data.data);
          
        navigate(`/${url}`);
      },
      onError: () => {
        setError("wrong creds");
      },
    }
  );
  return { loginMutation, error };
};

export const FetchData = () => {
  const query = useQuery(`admin`, async () => {
    const { data } = await axios.get('http://localhost:4000/api/admin');
    return data;
  });
  return { query };
};