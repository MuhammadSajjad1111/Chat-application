import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';


export default function Login() {
  const [user, setUser] = useState({

    email: '',
    password: '',
  });

  const [visible, setVisible] = useState("false");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const login = () => {
    const { email, password } = user
    alert("posted")
    try {
      axios.post("", user).then((res) => {
        console.log(res)
      })
    }
    catch (error) {
      console.log("Error in sending to the server")
    }
  }

  const toggle = () => {
    setVisible(!visible)
  }


  return (
    <div className='w-full h-screen xs: flex-col  md:flex md:flex-row'>
      <div className='xs: py-3 md:py-0 xs: w-full md:w-[35%] md:h-screen flex flex-col justify-center items-center bg-[#09ACAC] font-poppins md: px-[20px] lg:px-[101px] rounded-l-sm'>
        <h1 className='xs: my-3 xs: mb-[15px]  font-poppins md: text-[24px] lg:text-[32px] font-semibold leading-[100%] text-[#FFFFFF] md:mb-[27px]'>Welcome back</h1>
        <p className=' font-poppins md: text-[12px] lg:text-[16px] font-[400] leading-[140%] text-[#FFFFFF] text-center'>Enter your personal details and start your journey with us</p>
      </div>
      <div className='xs: p-2 sm:p-0 xs: w-full xs: mt-[5px] md:mt-0 md:w-[65%] h-screen flex flex-col '>
        <div className=' w-full flex flex-col justify-center items-center  h-full'>
          <h1 className='xs: text-[24px] font-poppins lg:text-[32px] font-semibold leading-[100%] text-[#09ACAC] mb-[59px]'>Sign in</h1>
          <div className=' w-full sm:w-auto'>
            <form onSubmit={login}>
              <div className='flex flex-col  gap-4 xs: mb-0 md:mb-3 justify-center items-center'>
                <div className='w-full'><input type="email" className='xs:mb-2 px-4 w-full  xs:h-[40px] md:w-[300px] lg:w-[400px] md:h-[40px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] lg:px-5 text-gray-400' placeholder='Email' required onChange={handleChange} value={user.email} name="email" /></div>
                <div className='w-full relative'><input type={visible === true ? "text" : "password"} className='xs:mb-2 px-4 w-full  xs:h-[40px] md:w-[300px] lg:w-[400px] md:h-[40px]  lg:h-[48px] rounded-md border-[#EAEAEA] border-[1px] lg:px-5 text-gray-400' placeholder='Password' required onChange={handleChange} value={user.password} name="password" />
                  <div className=' absolute xm: top-[3px] sm:top-1 md:top-4 lg:top-5 right-2'>
                    {visible === true ? <AiFillEye onClick={toggle} className=' text-gray-500' /> : <AiFillEyeInvisible onClick={toggle} className=' text-gray-500' />}
                  </div>
                </div>
              </div>

              <div className=' font-poppins text-[14px] font-normal leading-[19.6px] text-[#5F667E] xm: mt-[20px] md:mt-[38px]  flex justify-between'> <div><input type="checkbox" /> <span>Remember me</span> </div>  <p><NavLink to="/reset" className="text-[#9BA5C9]">Forgot password? </NavLink></p></div>
              <div className=' w-full'><button type='submit' className='xs: flex xs: justify-center xs: items-center  xs: mx-auto md:ml-0 lg:ml-0 w-[240px] h-[50px] rounded-md bg-[#09ACAC] text-[#FFFFFF] mt-[50px] mb-4'>Create Account</button></div>
              <div>
                <p className='xs: text-center md:text-left lg:text-left'>Don't have an account <NavLink className="text-[#09ACAC]" to="/signup" > Sign up</NavLink ></p>

              </div>

            </form>
          </div>

        </div>

      </div>

    </div>
  )
}

