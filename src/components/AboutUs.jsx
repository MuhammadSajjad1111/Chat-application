import React from 'react'
import employee from "../assets/images/employeeTracking.jpg";
import ceo from "../assets/images/ceo.jpg";

export default function AboutUs() {
    return (


        <div id='about'>
            <section className='xs:mt-10 md: mt-20 lg:mt-[200px]'>
                <div className='xs:flex-col md:flex'>

                    <div className='xs:w-full md:w-[60%] lg:w-1/2'>
                        <h3 className='relative font-JosefinSans text-[18px] font-medium mb-[20px]'> <span className=' '>___</span>About Us</h3>
                        <h1 className='text-[#09ACAC] font-RobotoSerif text-3xl lg:text-4xl font-normal leading-normal mb-[20px]'>Company Growth</h1>
                        <p className='text-[#333] font-RobotoSerif text-sm md:text-lg font-normal leading-[120%] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore ipsum quis nesciunt eius consequatur mollitia ipsa eaque eos architecto ut vitae nemo alias iste doloribus dolor explicabo incidunt nam consectetur, magni rem error. Id eum obcaecati, perferendis ex voluptas iure dolores tempore, enim amet provident in at aperiam molestias?</p>
                        <p className='text-[#09ACAC] font-JosefinSans text-sm font-bold leading-normal tracking-[0.91px]'>XYZ</p>
                        <p className='text-[#333] font-JosefinSans text-sm font-bold leading-normal tracking-[0.91px]'>Company founder and CEO</p>
                        <button className='w-24 h-4 text-[#FFF] font-RobotoSerif text-[15px] leading-normal tracking-[0.975px]'>Learn more</button>
                    </div>


                    <div className='xs:w-full md:w-[40%] lg:w-1/2 flex lg:justify-end '>
                        <img className='h-[300px] w-full md:w-full md:h-[500px] lg:w-[400px] rounded-lg shadow-md' src={ceo} alt="" />
                    </div>
                </div>
            </section>
        </div>

        // <div>
        //     <section className='xs:mt-10 md:mt-2 lg:mt-[200px]'>
        //         <div className='flex flex-col lg:flex-row'>


        //             <div className='lg:hidden w-full flex justify-center'>
        //                 <img className='lg:w-full md:w-[200px] md:h-[250px] rounded-lg shadow-md hover:shadow-[#09ACAC]' src={employee} alt="" />
        //             </div>

        //             <div className='w-full lg:w-1/2'>
        //                 <h3 className='relative font-JosefinSans text-[18px] font-medium mb-[20px]'> <span className=' '>___</span>About Us</h3>
        //                 <h1 className='text-[#09ACAC] font-RobotoSerif text-3xl lg:text-4xl font-normal leading-normal mb-[20px]'>Company Growth</h1>
        //                 <p className='text-[#333] font-RobotoSerif text-sm md:text-lg font-normal leading-[120%] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore ipsum quis nesciunt eius consequatur mollitia ipsa eaque eos architecto ut vitae nemo alias iste doloribus dolor explicabo incidunt nam consectetur, magni rem error. Id eum obcaecati, perferendis ex voluptas iure dolores tempore, enim amet provident in at aperiam molestias?</p>
        //                 <p className='text-[#09ACAC] font-JosefinSans text-sm font-bold leading-normal tracking-[0.91px]'>XYZ</p>
        //                 <p className='text-[#333] font-JosefinSans text-sm font-bold leading-normal tracking-[0.91px]'>Company founder and CEO</p>
        //                 <button className='w-24 h-4 text-[#FFF] font-RobotoSerif text-[15px] leading-normal tracking-[0.975px]'>Learn more</button>
        //             </div>


        //             <div className='hidden lg:flex lg:w-1/2 justify-end'>
        //                 <img className='w-[400px] h-[500px] rounded-lg shadow-md hover:shadow-[#09ACAC]' src={employee} alt="" />
        //             </div>
        //         </div>
        //     </section>
        // </div>


    )
}
