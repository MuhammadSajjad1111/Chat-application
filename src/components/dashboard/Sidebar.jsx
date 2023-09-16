import React from 'react'
import logo from "../../assets/images/logo.png"
import { NavLink } from 'react-router-dom';
import icon from "../../assets/images/icon.jpg"


export default function Sidebar() {
    return (
        <div className=' sticky top-0 flex flex-col'>
            <div className='flex justify-center items-center py-3'>
                <img src={logo} className=' w-10 h-10 mx-1' alt="" /> <span className=' text-[#09ACAC] font-poppins text-2xl'>Remote Eye</span>
            </div>
            <div className='flex justify-left items-center mx-[30px] my-10 text-[#09ACAC]'>

                <ul>
                    <li className=' mb-5'>  <NavLink className="flex gap-2 active:border-[#09ACAC]" to='chat'><img src={icon} alt="" />home</NavLink> </li>
                    <li className=' mb-5'>  <NavLink className="flex gap-2" to='home'><img src={icon} alt="" />home</NavLink> </li>
                    <li className=' mb-5'>  <NavLink className="flex gap-2" to='home'><img src={icon} alt="" />home</NavLink> </li>
                    <li className=' mb-5'>  <NavLink className="flex gap-2" to='home'><img src={icon} alt="" />home</NavLink> </li>
                    <li className=' mb-5'>  <NavLink className="flex gap-2" to='home'><img src={icon} alt="" />home</NavLink> </li>
                    <li className=' mb-5'>  <NavLink className="flex gap-2" to='home'><img src={icon} alt="" />home</NavLink> </li>
                    <li className=' mb-5'>  <NavLink className="flex gap-2" to='home'><img src={icon} alt="" />home</NavLink> </li>
                </ul>

            </div>
            <div className='flex flex-col justify-left mx-[30px] my-10 text-[#09ACAC]'>
                <li className=' mb-5 list-none'>  <NavLink className="flex gap-2" to='home'><img src={icon} alt="" />home</NavLink> </li>
                <li className=' mb-5 list-none'>  <NavLink className="flex gap-2" to='home'><img src={icon} alt="" />home</NavLink> </li>


            </div>
        </div>
    )
}
