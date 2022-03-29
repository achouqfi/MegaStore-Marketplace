import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import Error from '../Errors/index'
import { Link, Navigate } from 'react-router-dom';
import { login } from "../../../Hooks/useHooks";

const ClientSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
});

export default function LoginForm() {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={ClientSchema}
            onSubmit={async (values) => {
                console.log(values);
                // login(values, 'clients');
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <h1 className="font-bold text-blue-600 text-xl">
                        Bienvenue dans l'espace client authentifiez-vous
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
                            type="text"
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
                            Login
                        </button>
                        <Link to="/inscription" className='text-blue-500 mt-1 underline pb-1'>Create account</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}