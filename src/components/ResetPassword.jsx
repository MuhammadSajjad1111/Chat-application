import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    try {
      axios.post("", email).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log("Error in sending to the server");
    }
  };

  return (
    <div className="w-full h-screen bg-[#09ACAC] flex justify-center items-center px-3 lg:px-0">
      <div className="bg-white w-full md:w-[60%] lg:w-[40%] h-[30rem] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2">
        <h1 className=" text-lg lg:text-2xl font-bold mb-4 text-[#09ACAC]">
          Reset Password
        </h1>
        <p className="text-[#9BA5C9] text-center  text-sm lg:text-[16px] font-normal leading-normal">
          Enter the email address associated with your account and we will send
          you a link to reset your password
        </p>
        <div className="w-full flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleChange}
              className="xs:w-full  md:w-[400px] md:h-[40px] lg:w-[459px] lg:h-[46.5px] bg-[#C4C4C461] px-3 mt-3"
            />
            <div className="flex justify-center items-center">
              {" "}
              <button
                className="bg-[#09ACAC] text-white px-4 py-2 rounded mt-4 w-[120px] lg:w-[150px] text-sm lg:text-lg"
                type="submit"
              >
                Continue
              </button>{" "}
            </div>
          </form>
        </div>
        <p className="md:text-[12px] lg:text-[16px] mt-[6px]">
          Don't have an account?{" "}
          <NavLink className="text-[#09ACAC]" to="/signup">
            Signup
          </NavLink>{" "}
        </p>
      </div>
    </div>
  );
}
