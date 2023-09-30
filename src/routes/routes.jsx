import React from 'react'
import { REGISTER, LOGIN, OUR, BRAND, CATEGORIES, CATEGORY, TERMINOS, PRIVACY } from './paths'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PublicRoute } from './authRoutes/PublicRoutes'
const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element: <h1 className='text-3xl'>HOME</h1>
            },
            {
                path: REGISTER,
                element: <h1 className='text-3xl'>REGISTAR USSUARIO</h1>
            },
            {
                path: LOGIN,
                element: <h1 className='text-3xl'>INICIAR SESION</h1>
            },
            {
                path: OUR,
                element: <h1 className='text-3xl'> NOSOTROS</h1>
            },
            {
                path: BRAND,
                element: <h1 className='text-3xl' >MARCAS</h1>
            },
            {
                path: CATEGORIES,
                element: <h1 className='text-3xl'>CATEGORIAS</h1>
            },
            {
                path: CATEGORY,
                element: <h1 className='text-3xl'>CATEGORIA </h1>
            },
            {
                path: TERMINOS,
                element: <h1 className='text-3xl'>TERMINOS </h1>
            },
            {
                path: PRIVACY,
                element: <h1 className='text-3xl'>Politicas de privacidad </h1>
            },

        ]
    },


    {
        path: '*',
        element: <h1 className='text-3xl'>ERROR PAGINA NO ENCONTRADA</h1>
    }
])

export const Routes = () => (
    <>
        <RouterProvider router={router} />
    </>
)


