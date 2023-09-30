import { Outlet } from 'react-router-dom';
import { Nav } from '../../components/common/navbar/Nav';
import { Footer } from '../../components/common/footer/Footer';

import React from 'react'

export const PublicRoute = () => {

    return (
        <>
            <Nav />
            <div className='relative h-[500px]'>
                <div className='absolute -z-20 w-full h-full'>
                    < Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}








