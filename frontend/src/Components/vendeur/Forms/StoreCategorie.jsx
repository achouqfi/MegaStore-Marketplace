import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import Error from '../Errors/index'
import { create } from "../../../Hooks/useHooks";
import {useState} from 'react'

const CategorieSchema = Yup.object().shape({
    name: Yup.string().string().required("Required"),
});

export default function InscriptionForm() {

    return (

       
        <Formik
            initialValues={{
                name: ""
            }}
            validationSchema={CategorieSchema}
            onSubmit={async (values) => {
                 create(values,'categories')
            }}
        >
            
            {({ errors, touched }) => (
                <Form>
                    <h1 className="font-bold text-blue-600 text-xl">
                        Bienvenue dans l'espace Store Categorie    
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

