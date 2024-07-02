import { Outlet, Link } from "react-router-dom";
function Layout () {
    return (
        <>
            <nav className="bg-black text-white text-2xl justify-between h-[55px]">
                <ul className="list-none flex">
                    <li className ="mt-2 ml-[5px] text-2xl ">
                        <a href="/"></a>
                        <Link to="/DashBoard">Expense Tracker</Link>
                    </li>
                    <li className ="mt-2 ml-[970px] text-2xl">
                        <Link to="/Transactions">Transactions</Link>
                    </li>
                    <li className ="mt-2 ml-[30px] text-2xl">
                        <Link to="/Calendar">Calendar</Link>
                    </li>
                    <li className ="mt-2 ml-[30px] text-2xl">
                        <Link to="/Profile">Profile</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;