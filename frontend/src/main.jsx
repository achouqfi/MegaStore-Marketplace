import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from "react-query";
export const queryClient = new QueryClient();
import './i18n'
// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
)




// serviceWorker.unregister();
