import { useState } from "react";
import { useQuery } from "react-query";
 import ConfirmDelete from "../confirmdelete/index.jsx";
 import EditProduit from "../editproduit";
 import Modal from "../Modals/index.jsx";
import axios from "axios";
import { useCookies } from 'react-cookie';
const tablecommandes = () => {
  const [open, setIsOpen] = useState(false);
  const [edit, setIsEdit] = useState(false);
  const [produitId, setProduitId] = useState({});
// const [dataproduit, setdataProdui] = useState("");
// console.log(produitId);
const [cookies, setCookie, removeCookie] = useCookies();
   
  const query = useQuery("commandes", async () => {
    const { data } = await axios.get("http://localhost:4000/api/commande/vendeur/"+cookies.id);
    return data;
  });

  return (
     

      <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Quantite
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Produit
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Client
                </th>

                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Status
                </th>

              
              </tr>
            </thead>
            <tbody>
              {query &&
                query.data?.map((commande, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {commande.date}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {commande.quantite}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {commande.produit.Name}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {commande.clients.firstName}   {commande.clients.lastName}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {commande.status}
                    </td>
                   
                   
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
};
export default tablecommandes;
