import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './pages/ErrorPage';
import Root from './Root/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyQueries from './pages/MyQueries';
import AllQueries from './pages/AllQueries';
import Addqeries from './pages/Addqeries';
import PrivateRoute from './Routes/PrivateRoute';

import MyRecomendations from './pages/MyRecomendations';
import UpdateQueries from './pages/UpdateQueries';
import QueryDetails from './pages/QueryDetails';
import RecommendationsForMe from './pages/RecommendationsForMe';

const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children: [
          {
            path:"/",
            element: <Home/>,
             loader: () => fetch('https://server-site-rust.vercel.app/queries'),
          },
          {
            path:"/login",
            element:<Login></Login>,
          },
          {
            path:"/register",
            element:<Register/>,
          },
          {
            path:"/queries",
            element:<AllQueries></AllQueries>
          },

         {
          path:"/addqueries",
          element:<PrivateRoute><Addqeries></Addqeries></PrivateRoute>
         },
         {
          path: 'recommendationsForMe',
          element: <RecommendationsForMe />,
        },

         {
          path:"myqueries",
          element:<PrivateRoute><MyQueries></MyQueries></PrivateRoute>
         },
         {
          path:"myRecomendations",
          element:<MyRecomendations></MyRecomendations>
         },
         {
          path:"queryDetails/:id",
          element:<QueryDetails></QueryDetails>,
          loader: ({params}) => fetch(`https://server-site-rust.vercel.app/querie/${params.id}`)
         },

         {
          path:"updatequeries/:id",
          element:<PrivateRoute><UpdateQueries></UpdateQueries></PrivateRoute>,
          loader: ({params}) => fetch(`https://server-site-rust.vercel.app/querie/${params.id}`)
         }

      ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     <ToastContainer />
     </AuthProvider>
  </StrictMode>,
)
