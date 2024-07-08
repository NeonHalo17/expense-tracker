import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import DashBoard from "./DashBoard";
import Profile from "./Profile";
import Transactions from "./Transactions";
import Calendar from "./Calendar";
import Login from "./Login";
function NavbarTop() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element = {<Login />}/>
              <Route path="DashBoard" element = {<DashBoard />}/>
              <Route path="Transactions" element = {<Transactions/>}/>
              <Route path="Calendar" element = {<Calendar/>}/>
              <Route path="Profile" element = {<Profile/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default NavbarTop;