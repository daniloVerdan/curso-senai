import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from './pages/Home'
import { User } from './pages/User'
import { Error } from './pages/Error'
import { Login } from './pages/Login'
import { CreateUser } from './pages/CreateUser'
import { PrivateRoute } from "./components/PrivateRoute";

export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <PrivateRoute/>,
        children: [
            {path: '/home', element: <Home/>},
            {path: '/users/:id', element: <User/>},
            {path: '/create-user', element: <CreateUser/>},

        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/',
        element: <Navigate to="/Login" replace/>
    },
    {
        path: '*',
        element: <Error/>
    },
])