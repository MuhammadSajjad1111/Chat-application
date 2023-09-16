import React, { useState } from 'react'
import { AiOutlineSearch as FcSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import ceo from "../../assets/images/ceo.jpg";


export default function DashNavbar() {

    const [search, setSearch] = useState("")

    function handleChange(event) {
        setSearch(event.target.value)
    }

    return (

        <div className='fixed top-0 z-50 right-0 w-[85.7%] h-16 bg-[#F4F7FE] flex justify-between items-center px-4 '>
            <div className='flex justify-center items-center relative'>

                <input type="text" className='h-[35px] md:w-[180px] lg:w-[280px] md:h-[30px]  lg:h-[30px] rounded-md border-[#EAEAEA] border-[1px] px-8 text-gray-400 mx-3' placeholder='Search' required onChange={handleChange} value={search} name="search" />
                <span className=' absolute left-6 mt-1'><FcSearch /></span>
            </div>
            <div className=' flex justify-center items-center gap-5 mr-3 bg-[#FFF] rounded-sm py-2 px-9'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <IoIosNotificationsOutline />
                <img src={ceo} alt="" className=' h-8 w-8 rounded-[50%]' />




            </div>
        </div>

    )
}
