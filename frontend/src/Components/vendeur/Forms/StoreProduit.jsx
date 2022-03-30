import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import Error from '../Errors/index'
import { create } from "../../../Hooks/useHooks";
import {useState} from 'react'

const ProduitSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    prix: Yup.string().required("Required"),
    quantite: Yup.string().required("Required"),
    marque: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
    categorie: Yup.string().required("Required"),
});

export default function InscriptionForm() {

    return (

       
        <Formik
            initialValues={{
                name: "",
                prix: "",
                quantite: "",
                marque: "",
                image: "",
                categorie:""
            }}
            validationSchema={ProduitSchema}
            onSubmit={async (values) => {
                 create(values,'produits')
            }}
        >
            
            {({ errors, touched }) => (
                <Form>
                    <h1 className="font-bold text-blue-600 text-xl">
                        Bienvenue dans l'espace Store Produit    
                    </h1>
                    {/* {<Error error={errors} />} */}
                    <div className="mt-4">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Name
                        </label>
                        <Field
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="name"
                        />
                        {errors.name && touched.name ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.name}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="prix"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Prix
                        </label>
                        <Field
                            type="text"
                            id="prix"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="prix"
                        />
                        {errors.prix && touched.prix ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.prix}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="quantite"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Quantite
                        </label>
                        <Field
                            type="number"
                            id="quantite"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="quantite"
                        />
                        {errors.quantite && touched.quantite ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.quantite}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="marque"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Marque
                        </label>
                        <Field
                            type="text"
                            id="marque"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="marque"
                        />
                        {errors.marque && touched.marque ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.marque}
                            </div>
                        ) : null}
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="image"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="image"
                            multiple
                        />
                        {errors.image && touched.image ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.image}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Categorie
                        </label>
                        {/* <select
                            // type="select"
                            id="categorie"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="categorie"
                        /> */}

                    <Field
                            id="categorie"
                            name="categorie"
                            as="select"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="" label="Select a categorie">
                            Select a categorie{" "}
                            </option>
                            <option value="cat1" label="cat1">
                            {" "}
                            cat1
                            </option>
                            <option value="cat2" label="cat2">
                            cat2
                            </option>
                            <option value="cat3" label="cat3">
                            cat3
                            </option>
                        </Field>
                        {errors.categorie && touched.categorie ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.categorie}
                            </div>
                        ) : null}
                    </div>

                    {/* <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            TypeCompte
                        </label>
                        <label>Starter</label>
                        <input
                            type="radio"
                            id="expret"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="radio"
                            checked
                        />

                        <label>Pro</label>
                        <input
                            type="radio"
                            id="expret"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="radio"
                        />

                        <label>Expert</label>
                        <input
                            type="radio"
                            id="expret"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="radio"
                        />

                        <label
                            htmlFor="email"
                            className="paiement invisible  block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            
                        >
                            Mode de Paiement
                        </label>
                    <label className='invisible'>Virement Bancaire</label>
                        <input
                            type="radio"
                            id="virement"
                            className="paiement invisible  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="paiement"
                        />

                        <label className='invisible '>Paiement par Carte</label>
                        <input
                            type="radio"
                            id="carte"
                            className="paiement invisible  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="paiement"
                        />

                        {errors.file && touched.file ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.file}
                            </div>
                        ) : null}
                    </div> */}

                    <div className="mt-8 flex justify-between">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-5 text-gray-50 uppercase ml-4 md:self-start"
                        >
                            Save
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

