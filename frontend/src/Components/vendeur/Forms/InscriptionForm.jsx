import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import Error from '../Errors/index'
import { create } from "../../../Hooks/useHooks";
import {useState} from 'react'

const VendeurSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    file: Yup.string().required("Required"),
});

export default function InscriptionForm() {


    return (

        <Formik
            initialValues={{
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                phone: "",
                file:file
            }}
            validationSchema={VendeurSchema}
            onSubmit={async (values) => {
                 create(values,'vendeurs')
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <h1 className="font-bold text-blue-600 text-xl">
                        Bienvenue dans l'espace vendeur Incrivez-vous maintenant    
                    </h1>
                    {/* {<Error error={errors} />} */}
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <Field
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="email"
                        />
                        {errors.email && touched.email ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            FirstName
                        </label>
                        <Field
                            type="text"
                            id="firstName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="firstName"
                        />
                        {errors.firstName && touched.firstName ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.firstName}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            LastName
                        </label>
                        <Field
                            type="text"
                            id="lastName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="lastName"
                        />
                        {errors.lastName && touched.lastName ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.lastName}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Phone
                        </label>
                        <Field
                            type="text"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="phone"
                        />
                        {errors.phone && touched.phone ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.phone}
                            </div>
                        ) : null}
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Document
                        </label>
                        <input
                            type="file"
                            id="file"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="file"
                            onchange={setfile(file)}
                            value={file}
                            multiple
                        />
                        {errors.file && touched.file ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.file}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <Field
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="password"
                        />
                        {errors.password && touched.password ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.password}
                            </div>
                        ) : null}
                    </div>

                    <div className="mt-8 flex justify-between">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-5 text-gray-50 uppercase ml-4 md:self-start"
                        >
                            Sign in
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

