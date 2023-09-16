import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Roles() {
  return (
    <div className='w-full h-screen bg-[#09ACAC] flex justify-center items-center px-3 lg:px-0'>
      <div className='bg-white w-full md:w-[60%] lg:w-[40%] h-[30rem] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center'>
        <h1 className=' text-lg lg:text-2xl font-bold mb-4 text-[#09ACAC]'>Let us know</h1>
        <p className='text-gray-600 text-center mb-6 text-sm lg:text-xl'>Select the option below to get started</p>

        <NavLink to="/login"><button className='bg-[#09ACAC] text-white px-4 py-2 rounded mt-4 w-[120px] lg:w-[150px] text-sm lg:text-lg'>I'm Admin</button></NavLink>
        <NavLink to=""><button className='bg-[#09ACAC] text-white px-4 py-2 rounded mt-2 sm:w-[120px] md:w-[150px] text-sm lg:text-lg'>I'm Employer</button></NavLink>
        <NavLink to=""> <button className='bg-[#09ACAC] text-white px-4 py-2 rounded mt-2 sm:w-[120px] md:w-[150px] text-sm lg:text-lg'>I'm Employee</button></NavLink>
      </div>
    </div>
  )
}
