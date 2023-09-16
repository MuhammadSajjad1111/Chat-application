import React from 'react'
import { NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import main from '../assets/images/main.png';


export default function () {
    return (
        <div id='home'>


            <div className='flex justify-center items-center'>
                <section className='flex items-start justify-between my-8 md:my-20 '>
                    <div className='basis-full lg:basis-3/4 xl:basis-1/2'>
                        <h3 className='relative font-JosefinSans text-[18px] font-medium'> <span className=' '>___</span>Remote Eye, Controlling</h3>
                        <p className='text-[#09ACAC]  sm: text-4xl md:text-5xl lg:text-[75px] font-bold leading-none'>Use Endpoint User Behaviour to implement</p>
                        <p className='text-[#3b9999] mt-[10px]'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'bussiness process optimization',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'work force productivity',
                                    1000,
                                    'employee monitoring',
                                    1000,
                                    'data loss prevention',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </p>
                        <p className='mt-[26px] font-JosefinSans md:text-[18px] lg:text-[20px] font-semibold leading-[120%]'>Strengthen security, improve productivity and manage compliance with a single, scalable solution</p>

                        <NavLink to="/signup"><button type="button" className="text-white sm: w-full md:w-[140px] bg-[#09ACAC] hover:bg-[#61c6c6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue- font-RobotoSerif mt-[20px]">Join Us</button> </NavLink>

                    </div>
                    <div className='hidden lg:block'>
                        <img src={main} alt="" className='lg:w-[350px] ' />
                    </div>
                </section>
            </div>




        </div>
    )
}
