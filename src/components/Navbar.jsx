import React, { useState } from 'react'
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';


export default function Navbar() {

    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }
    return (
        <div className='sticky top-0 z-50'>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={logo} className=" mr-3 w-10 h-10" alt="Remote Eye Logo" />
                        <span className="self-center text-[16px] font-semibold leading-normal whitespace-nowrap text-[#09ACAC] font-Rokkitt traking-[1.04px]">Remote Eye</span>
                    </a>
                    <div className="flex md:order-2">
                        <NavLink to="/roles"> <button type="button" className="text-white bg-[#09ACAC] hover:bg-[#61c6c6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-[120px] lg:w-[140px]">login</button> </NavLink>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" onClick={toggle}>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${show === false ? 'hidden' : 'block'} w-full md:flex md:w-auto md:order-1" id="navbar-cta`}>
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#home" className="block py-2 pl-3 pr-4 text-white bg-[#09ACAC] rounded md:bg-transparent md:text-[#09ACAC] md:p-0 md:dark:text-blue-500 xs:text-[12px] md:text-[14px] lg:text-[16px]" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#09ACAC] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 xs:text-[12px] md:text-[14px] lg:text-[16px]">About Us</a>
                            </li>
                            <li>
                                <a href="#services" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#09ACAC] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 xs:text-[12px] md:text-[14px] lg:text-[16px]">Services</a>
                            </li>
                            <li>
                                <a href="#testimonial" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#09ACAC] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 xs:text-[12px] md:text-[14px] lg:text-[16px]">Testimonials</a>
                            </li>
                            <li>
                                <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#09ACAC] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 xs:text-[12px] md:text-[14px] lg:text-[16px]">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
