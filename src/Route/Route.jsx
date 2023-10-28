import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Main Layout/Root';
import Error from '../Pages/Error page/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Details from '../Pages/Details/Details';
import Checkout from '../Pages/Checkout/Checkout';
import Bookings from '../Pages/Bookings/Bookings';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const route = createBrowserRouter([
   {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: () => fetch(`http://localhost:5000/services`)
        },
        {
            path: '/checkout/:id',
            element: <Checkout></Checkout>,
            loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path: '/bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
    ]
   }
])

export default route;