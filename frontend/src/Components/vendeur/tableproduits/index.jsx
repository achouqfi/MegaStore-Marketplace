import { useState } from "react";
import { useQuery } from "react-query";
 import ConfirmDelete from "../confirmdelete/index.jsx";
 import EditProduit from "../editproduit";
 import Modal from "../Modals/index.jsx";
import axios from "axios";
const tableproduits = () => {
  const [open, setIsOpen] = useState(false);
  const [edit, setIsEdit] = useState(false);
  const [produitId, setProduitId] = useState({});
// const [dataproduit, setdataProdui] = useState("");
// console.log(produitId);

  const query = useQuery("produits", async () => {
    const { data } = await axios.get("http://localhost:4000/api/produits/");
    return data;
  });

  return (
      
    <div>
      <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Prix
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
                  Marque
                </th>

                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Image
                </th>

                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Categorie
                </th>

                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Action
                </th>
                {/* <th scope="col" className="relative py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {query &&
                query.data?.map((produit, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {produit.Name}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {produit.prix}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {produit.quantite}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {produit.marque}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      <img src={produit.images} alt="" />
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {produit.categorie.Name}
                    </td>
                    <td className="">
                    {/* <div className="space-x-3"> */}
                      <button
                            type="button"
                            onClick={() => {
                              setIsEdit(!edit);
                              setProduitId({
                                productId :produit._id,
                                productName : produit.Name, 
                                productPrice : produit.prix,
                                productQuantity : produit.quantite,
                                productBrand : produit.marque,
                                productImage : produit.images,
                                productCategory : produit.categorie.Name
                              });
                            }}
                            className=" text-blue-500  hover:text-white border border-blue-500  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500  dark:text-blue-500  dark:hover:text-white dark:hover:bg-blue-500  dark:focus:ring-blue-800"
                          >
                            edit
                          </button>
                    {/* </div>
                      <div className="space-x-3"> */}
                        <button
                          type="button"
                          onClick={() => {
                            setIsOpen(!open);
                            setProduitId(produit._id);
                          }}
                          className=" text-red-700 ml-4 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
                        >
                          delete
                        </button>
                      {/* </div> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={open}
          setIsOpen={setIsOpen}
          component={
            <ConfirmDelete
            isOpen={open}
            setIsOpen={setIsOpen}
            rowId={produitId}
            role={"produits"}
            />
          }
        />

      <Modal
          isOpen={edit}
          setIsOpen={setIsEdit}
          component={
            <EditProduit
            isOpen={edit}
            setIsOpen={setIsEdit}
            rowId={produitId}
            role={"produits"}
            />
          }
        />
      </div>
    </div>
  );
};
export default tableproduits;
