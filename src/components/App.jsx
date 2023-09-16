import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roles from "./Roles";
import Check from "./Check";
import Signup from "./Signup";
import Login from "./Login";
import Forgot from "./ResetPassword";
import Landing from "./Landing";
import Layout from "./dashboard/Layout"
import DashboardHome from "./dashboard/DashboardHome";
import Dashboard from "./dashboard/Dashboard";
import DashHome from "./dashboard/DashHome";
import Chatbox from "./dashboard/Chatbox";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />}></Route>
        <Route path="roles" element={<Roles />}></Route>
        <Route path="check" element={<Check />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="reset" element={<Forgot />}></Route>

        {/* <Route path="dashboard" element={<Layout />}>
          <Route index element={<DashboardHome />} />
          <Route path="chat" element={<div className=" py-72 px-28"> My name is khan</div>} />

        </Route> */}

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashHome />} />
          <Route path="chatbox" element={<Chatbox />} />

        </Route>
      </Routes>





    </BrowserRouter>

  );
}

export default App;
