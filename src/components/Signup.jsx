import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';


export default function Signup() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        phoneNumber: '',
        numberOfEmployees: ''
    })

    const [visible, setVisible] = useState("false");
    const [confirmVisible, setConfirmVisible] = useState("false");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    }

    const register = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword, companyName, phoneNumber, numberOfEmployees } = user;
        console.log(user)
        if (firstName && lastName && email && companyName && phoneNumber && numberOfEmployees && password && (password === confirmPassword)) {
            alert("posted")
            //  axios.post("" , user).then((res)=>{
            //     console.log(res)
            //  })
        }
        else {
            // alert("Invalid input");
        }
    }

    const toggle = () => {
        setVisible(!visible)
    }

    const confirmToggle = () => {
        setConfirmVisible(!confirmVisible)
    }

    return (
        <div className='w-full h-screen xs: flex-col  md:flex md:flex-row'>
            <div className='xs: py-3 md:py-0 xs: w-full md:w-[35%] md:h-screen flex flex-col justify-center items-center bg-[#09ACAC] font-poppins md: px-[20px] lg:px-[101px] rounded-l-sm'>
                <h1 className='xs: my-3 xs: mb-[15px]  font-poppins md: text-[24px] lg:text-[32px] font-semibold leading-[100%] text-[#FFFFFF] md:mb-[27px]'>Hello, Friend</h1>
                <p className=' font-poppins md: text-[12px] lg:text-[16px] font-[400] leading-[140%] text-[#FFFFFF] text-center'>Enter your personal details and start your journey with us</p>
            </div>
            <div className='xs: p-2 sm:p-0 xs: w-full xs: mt-[5px] md:mt-0 md:w-[65%] h-screen flex flex-col '>
                <div className=' w-full flex flex-col justify-center items-center  h-full'>
                    <h1 className='xs: text-[24px] font-poppins lg:text-[32px] font-semibold leading-[100%] text-[#09ACAC] mb-[59px]'>Create Account</h1>
                    <form onSubmit={register}>
                        <div className='xs: flex-col md:flex md:flex-row gap-4 xs: mb-0 md:mb-3 justify-center items-center'>
                            <div><input type="text" className='xs: mb-3 xs: w-full xs: h-[35px] md:w-[180px] lg:w-[280px] md:h-[30px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] px-5 text-gray-400' placeholder='First name' required onChange={handleChange} value={user.firstName} name="firstName" /></div>
                            <div> <input type="text" className='xs: mb-3 xs: w-full xs: h-[35px] md:w-[180px] lg:w-[280px] md:h-[30px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] px-5 text-gray-400' placeholder='Last name' required onChange={handleChange} value={user.lastName} name="lastName" /> </div>
                        </div>
                        <div className='xs: flex-col md:flex md:flex-row gap-3 xs: mb-0 md:mb-3 justify-center items-center'>
                            <div><input type="email" className='xs: mb-3 xs: w-full xs: h-[35px]  md:w-[180px] lg:w-[280px] md:h-[30px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] px-5 text-gray-400' placeholder='Email' required onChange={handleChange} value={user.email} name="email" /></div>
                            <div><input type="text" className='xs: mb-3 xs: w-full xs: h-[35px] md:w-[180px] lg:w-[280px] md:h-[30px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] px-5 text-gray-400' placeholder='Company Name' required onChange={handleChange} value={user.companyName} name="companyName" /></div>
                        </div>

                        <div className='xs: flex-col md:flex md:flex-row gap-3 xs: mb-0 md:mb-3 justify-center items-center'>
                            <div><input type="text" className=' xs: mb-3 xs: w-full xs: h-[35px]  md:w-[180px] lg:w-[280px] md:h-[30px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] px-5 text-gray-400' placeholder='Phone Number' required onChange={handleChange} value={user.phoneNumber} name='phoneNumber' /></div>
                            <div> <input type='number' className='xs: mb-3 xs: w-full xs: h-[35px] md:w-[180px] lg:w-[280px] md:h-[30px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] px-5 text-gray-400' placeholder='Number of employees' required onChange={handleChange} value={user.numberOfEmployees} name='numberOfEmployees' /></div>
                        </div>

                        <div className=' xs: flex-col md:flex md:flex-row gap-3 mb-4 justify-center items-center'>
                            <div className='relative'> <input type={visible === true ? "text" : "password"} className=' xs: mb-3 xs: w-full xs: h-[35px]  md:w-[180px] lg:w-[280px] md:h-[30px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] px-5 text-gray-400' placeholder='Password' required onChange={handleChange} value={user.password} name='password' />
                                <div className=' absolute xs: top-[10px] sm:top-3 md:top-2 lg:top-5 right-2'>
                                    {visible === true ? <AiFillEye onClick={toggle} className=' text-gray-500' /> : <AiFillEyeInvisible onClick={toggle} className=' text-gray-500' />}
                                </div>
                            </div>
                            <div className='relative'> <input type={confirmVisible === true ? "text" : "password"} className=' xs: mb-3 xs: w-full xs: h-[35px]  md:w-[180px] lg:w-[280px] md:h-[30px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] px-5 text-gray-400' placeholder='Confirm Password' required onChange={handleChange} value={user.confirmPassword} name='confirmPassword' />
                                <div className=' absolute xs: top-[10px] sm:top-3 md:top-2 lg:top-5 right-2'>
                                    {confirmVisible === true ? <AiFillEye onClick={confirmToggle} className=' text-gray-500' /> : <AiFillEyeInvisible onClick={confirmToggle} className=' text-gray-500' />}
                                </div>
                            </div>
                        </div>

                        <p className=' xs: text-center font-poppins text-[14px] font-normal leading-[19.6px] text-[#5F667E] mb-4 md:text-center lg:text-left'>By clicking sign up, you agree to our Terms, Data Policy and Cookies Policy.</p>

                        <button className=' xs: ml-[65px] sm:ml-36 md:ml-[25%] lg:ml-0 w-[240px] h-[50px] rounded-md bg-[#09ACAC] text-[#FFFFFF] mb-4' type='submit'>Create Account</button>

                        <p className='xs: text-center md:text-center lg:text-left'>Already have an account? <NavLink className="text-[#09ACAC]" to="/login" > Sign in</NavLink > </p>
                    </form>
                </div>
            </div>

        </div>
    )
}
