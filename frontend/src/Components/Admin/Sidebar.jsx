import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
             
    <div className="flex flex-col w-16 min-h-screen border-r dark:bg-gray-800 dark:border-gray-600">

        <div className="flex items-center justify-center bg-indigo-500 w-16 h-16 ">
            <h2 className="text-3xl font-semibold text-gray-800 mr-1">M</h2>
        </div>
        
        <div className="flex flex-col justify-between flex-1 bg-gray-700 px-3 py-10 w-16">
            <nav>
                <NavLink to={'/adminDash'} className={ ({ isActive }) => isActive ? "flex items-center text-indigo-600 bg-gray-50 rounded-md justify-center h-11 my-4":"flex items-center text-gray-50 rounded-md hover:bg-gray-50 hover:text-indigo-700 rounded-md justify-center h-11 my-4"} >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                    </svg>
                </NavLink>

                <NavLink to={'/categories'} className={ ({ isActive }) => isActive ? "flex items-center text-indigo-600 bg-gray-50 rounded-md justify-center h-11 my-4":"flex items-center text-gray-50 rounded-md hover:bg-gray-50 hover:text-indigo-700 rounded-md justify-center h-11 my-4"} >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                </NavLink >

                <hr className="my-6 border-gray-200 dark:border-gray-600" />

                <NavLink to={'/logout'} className={ ({ isActive }) => isActive ? "flex items-center text-indigo-600 bg-gray-50 rounded-md justify-center h-11 my-4":"flex items-center text-gray-50 rounded-md hover:bg-gray-50 hover:text-indigo-700 rounded-md justify-center h-11 my-4"} >
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-box-arrow-right w-5 h-5" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                </NavLink>
            </nav>

        </div>
    </div>

  )
}

export default Sidebar