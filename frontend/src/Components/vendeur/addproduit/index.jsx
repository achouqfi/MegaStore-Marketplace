import ProduitTable from "../tableproduits/index";
import Modal from "../Modals/index";
import { useState } from "react";
import Formaddproduit from "../formaddproduit/index";
export default function Produit() {
    const [open, setIsOpen] = useState(false);

  return (
    <div className="w-[100%]">
    <div className="flex justify-between items-center ">
      <h1 className="text-4xl font-black pl-12  py-14">Produits</h1>
      <button
        onClick={() => setIsOpen(!open)}
        type="button"
        className="h-12 mr-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Produits
      </button>
    </div>
    <div className="flex">
      <div className="w-full">
      <ProduitTable />
      </div>
    </div>
    <Modal
      isOpen={open}
      title="add Produit"
      setIsOpen={setIsOpen}
      component={<Formaddproduit isOpen={open} setIsOpen={setIsOpen} />}
    />
  </div>
  )
}
