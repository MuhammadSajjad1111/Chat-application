import React from 'react'
import DashNavbar from './DashNavbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <div className='flex'>
            <div className='w-2/12 bg-[#FFF]'>
                <Sidebar />
            </div>
            <div className='flex flex-col w-full bg-[#F4F7FE]'>
                <div className='w-full'><DashNavbar /></div>
                <div className=''>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
