import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
export default function Modepaiement() {
  return (
<>
<label
  className="paiement  block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
>
  Mode de Paiement
</label>

<Field
        id="modepaiement"
        name="modepaiement"
        as="select"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   
    >
        <option value=""  label="Select a typecompte">
        Select Mode de Paiement
        </option>
        <option value="Paiement par Carte" label="Paiement par Carte">
        {" "}
        Paiement par Carte
        </option>
        <option value="Virement Bancaire" label="Virement Bancaire">
        Virement Bancaire
        </option>
    </Field>

    {/* {errors.modepaiement && touched.modepaiement ? (
        <div className="text-red-500 font-semibold dark:text-red-400">
            {errors.modepaiement}
        </div>
    ) : null} */}
</>
  );
}
