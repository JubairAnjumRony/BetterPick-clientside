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
          element: <PrivateRoute><RecommendationsForMe /></PrivateRoute>,
        },

         {
          path:"myqueries",
          element:<PrivateRoute><MyQueries></MyQueries></PrivateRoute>
         },
         {
          path:"myRecomendations",
          element:<PrivateRoute><MyRecomendations></MyRecomendations></PrivateRoute>
         },
         {
          path:"queryDetails/:id",
          element:<PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
          // loader: ({params}) => fetch(`http://localhost:5000/queries/${params.id}`),
         },

         {
          path:"updatequeries",
          element:<PrivateRoute><UpdateQueries></UpdateQueries></PrivateRoute>
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
