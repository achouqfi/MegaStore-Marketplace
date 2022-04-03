import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import React from 'react'
import { create } from "../../Hooks/useHooks";
import axios from "axios";

const CategorySchema = Yup.object().shape({
  name: Yup.string().required("Required")
});

const AddCategory = ({ setIsOpen,isOpen }) => {

  return (

    <Formik
      initialValues={{
        name: ""
      }}
      validationSchema={CategorySchema}
      onSubmit={async (values) => {
        create(values,'category')
      }}
    >
    
    {({ errors, touched }) => (
      <Form>
        <h1 className="font-bold text-blue-600 text-xl">
          Create a new category    
        </h1>
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
            className="w-[12em] text-green-900 bg-white border border-green-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-gray-700 dark:focus:ring-green-800"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-[12em] text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            cancel
          </button>
        </div>
      </Form>
      )}
    </Formik>
  );
};
export default AddCategory;



