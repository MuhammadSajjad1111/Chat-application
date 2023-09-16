import React from 'react'
import communication from "../assets/images/communication.jpg";
import project from "../assets/images/project-management.jpg";
import employee from "../assets/images/employeeTracking.jpg";

export default function Services() {
    return (
        <div id='services'>
            <section className=' xs:mt-10 md:mt-2 lg:mt-[60px]' >
                <h3 className='relative font-JosefinSans text-[18px] font-medium'> <span className=' '>___</span>Services</h3>
                <h1 className='text-[#09ACAC] font-RobotoSerif text-3xl lg:text-4xl font-normal leading-normal'>Our Services</h1>

                <div className=' xs:flex-col md:flex w-[100%] mt-[30px] justify-between gap-16 items-center'>
                    <div className='relative xm: mb-7  md:mb-0'>
                        <img src={employee} className=' w-full h-[300px] md:h-[350px] md:w-[450px] lg:h-[400px] lg:w-[550px] rounded-lg shadow-md hover:shadow-[#09ACAC] cursor-pointer' alt="" />
                        <p className=' absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[black] font-RobotoSerif font-extrabold md:text-xl lg:text-2xl'>Employee Traking</p>
                    </div>
                    <div className='relative xm: mb-7  md:mb-0'>
                        <img src={project} className='w-full h-[300px] md:h-[350px] md:w-[450px] lg:h-[400px] lg:w-[550px] rounded-lg shadow-md hover:shadow-[#09ACAC] cursor-pointer' alt="" />
                        <p className=' absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[black] font-RobotoSerif font-extrabold md:text-xl lg:text-2xl'>Project Management</p>
                    </div>
                    <div className='relative xm: mb-7  md:mb-0'>
                        <img src={communication} className='w-full h-[300px] md:h-[350px] md:w-[450px] lg:h-[400px] lg:w-[550px] rounded-lg shadow-md hover:shadow-[#09ACAC] cursor-pointer' alt="" />
                        <p className=' absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[black] font-RobotoSerif font-extrabold md:text-xl lg:text-2xl text-center'>Bussiness Communication</p>
                    </div>







                </div>
            </section>
        </div>
    )
}
