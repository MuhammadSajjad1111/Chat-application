import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Chatbox from './Chatbox';

export default function Dashboard() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className='flex bg-gray-100 min-h-screen'>
            <aside className={`${open ? '' : 'hidden'} h-screen sm:flex sm:flex-col fixed top-0 left-0  z-10`}>
                <a href="#" className="inline-flex items-center justify-center h-20 w-20 bg-[#09ACAC] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 109 109" fill="none">
                        <path d="M3.1166 74.3876C3.2835 73.4248 5.23481 72.8953 6.1896 72.7509L6.90057 86.3914C5.27711 86.625 3.85312 86.4699 3.75964 85.394C3.47576 82.1264 2.94971 75.3505 3.1166 74.3876Z" stroke="#D9D9D9" stroke-width="4.63777" />
                        <path d="M105.699 74.2869C105.51 73.3282 103.547 72.8439 102.589 72.7216L102.194 86.375C103.822 86.5709 105.242 86.383 105.311 85.3052C105.519 82.0319 105.888 75.2456 105.699 74.2869Z" stroke="#D9D9D9" stroke-width="4.63777" />
                        <path d="M7.06287 69.903C11.2683 62.3036 27.6957 49.7367 31.6229 39.5701C31.4842 40.2433 31.7516 44.8529 45.0876 54.2197C47.7098 56.4225 53.8249 60.8575 57.3074 60.9756L101.649 67.7634C105.899 64.9302 107.308 52.9908 107.482 47.3752C107.225 43.459 106.252 35.2917 99.9046 30.8727C93.557 26.4538 90.1472 20.5892 88.6466 16.1885C87.568 13.025 86.857 12.3534 86.3231 11.4718C75.9833 -5.6012 59.3136 0.544657 53.3828 3.7868C50.1769 6.74872 42.2263 12.4324 36.0711 11.4718C29.9158 10.5111 23.7938 11.2853 21.284 12.6725C17.1564 14.954 8.01169 22.1107 4.45317 32.4855C0.894657 42.8602 4.69855 61.6176 7.06287 69.903Z" fill="url(#paint0_linear_112_1178)" />
                        <path d="M54.9159 60.9658L15.6102 63.2212C11.0956 63.4802 8.18551 67.5913 6.85129 70.5812C6.40582 71.5794 6.2924 72.6826 6.34973 73.7743L7.19184 89.8087C7.2894 91.6663 7.94327 93.4517 9.06852 94.933L13.9446 101.352C15.5384 103.45 17.9493 104.771 20.5754 104.986L39.6969 106.548C42.5729 106.548 46.4076 103.106 48.5646 101.562C52.8787 98.9509 57.7919 99.9005 59.8291 101.314C62.7007 103.684 65.9036 105.38 67.911 106.148C68.7347 106.463 69.6228 106.516 70.5024 106.454L88.3312 105.193C90.0661 105.07 91.7316 104.462 93.1374 103.438L93.8171 102.943C94.6404 102.343 95.3593 101.612 95.9449 100.779L100.118 94.8418C101.12 93.4159 101.701 91.7387 101.787 89.998C102.045 84.814 102.41 76.7307 102.49 72.1239C102.569 67.6124 100.026 64.9699 98.05 63.7918C97.2954 63.3419 96.4126 63.1972 95.5353 63.1501L54.9159 60.9658Z" stroke="white" stroke-width="4.63777" />
                        <defs>
                            <linearGradient id="paint0_linear_112_1178" x1="67.0464" y1="14.9366" x2="55.2409" y2="69.903" gradientUnits="userSpaceOnUse">
                                <stop offset="0.2845" stop-color="white" />
                                <stop offset="0.800316" stop-color="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>
                <div className="flex-grow flex flex-col justify-between text-gray-500 bg-[#09ACAC]">
                    <nav className="flex flex-col mx-4 my-6 space-y-4">
                        <NavLink to="chatbox" className="inline-flex items-center justify-center py-3 text-[#FFF] hover:text-[#09ACAC] hover:bg-[#FFF] focus:text-[#09ACAC] focus:bg-[#FFF] rounded-lg">    <a href="#" >
                            <span className="sr-only">Folders</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                        </a> </NavLink>
                        <NavLink to="chatbox" className="inline-flex items-center justify-center py-3 text-[#FFF] hover:text-[#09ACAC] hover:bg-[#FFF] focus:text-[#09ACAC] focus:bg-[#FFF] rounded-lg">    <a href="#" >
                            <span className="sr-only">Folders</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </a> </NavLink>
                        <NavLink to="chatbox" className="inline-flex items-center justify-center py-3 text-[#FFF] hover:text-[#09ACAC] hover:bg-[#FFF] focus:text-[#09ACAC] focus:bg-[#FFF] rounded-lg">    <a href="#" >
                            <span className="sr-only">Folders</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a> </NavLink>
                        <NavLink to="chatbox" className="inline-flex items-center justify-center py-3 text-[#FFF] hover:text-[#09ACAC] hover:bg-[#FFF] focus:text-[#09ACAC] focus:bg-[#FFF] rounded-lg">    <a href="#" >
                            <span className="sr-only">Folders</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                        </a> </NavLink>
                    </nav>
                    <div className="inline-flex items-center justify-center h-20 w-20 border-t border-[#FFF]">
                        <button className="p-3 text-[#FFF] hover:text-[#09ACAC] hover:bg-[#FFF] focus:text-[#09ACAC] focus:bg-[#FFF] rounded-lg">
                            <span className="sr-only">Settings</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
            <div className="flex-grow text-gray-800">
                <header className={`${open ? "ml-[4rem]" : ""} flex items-center h-20 px-6 sm:px-10 bg-[#FFF] sm:ml-16 sticky top-0`}>
                    <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                        <span className="sr-only">Menu</span>
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6" onClick={handleClick}>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </button>
                    <div className="relative w-full max-w-md sm:-ml-2">
                        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                        <input type="text" role="search" placeholder="Quick Search" className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
                    </div>
                    <div className="flex flex-shrink-0 items-center ml-auto">
                        <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                            <span className="sr-only">User Menu</span>
                            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                                <span className="font-semibold">Byte Webster</span>
                                <span className="text-sm text-gray-600">Computer Programmer</span>
                            </div>
                            <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                                {/* <img src="https://bytewebster.com/img/logo.png" alt="user profile photo" className="h-full w-full object-cover"> */}
                            </span>
                            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div className="border-l pl-3 ml-3 space-x-1">
                            <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                <span className="sr-only">Notifications</span>
                                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                            <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                <span className="sr-only">Log out</span>
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
