import React from 'react'
import LoginForm from '../../Components/Client/Forms/LoginForm'
import Inscription from '../../Components/Client/Forms/InscriptionForm'
export default function AuthClient() {
    let path = window.location.pathname
    return (
        <div className="h-[100%] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800">
            <div className="p-4 w-[100%] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-9 dark:bg-gray-800 dark:border-gray-700">
                { path == '/login' ? <LoginForm /> : path == '/inscription'  ? <Inscription /> : null }
            </div>
        </div>
    )
}
