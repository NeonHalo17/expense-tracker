import { Outlet, Link } from "react-router-dom";
import logo from './images/logo.svg';

function Layout () {
    return (
        <div className="">
            <nav className="bg-black text-white text-2xl justify-between h-auto">
                <div className="mx-4">
                    <ul className="list-none flex pb-2">
                        <li className ="mt-2 ml-[5px] text-2xl ">
                            <Link to="/">
                                <img className="object-contain h-[50px] w-[50px]"src={logo}/>
                            </Link>
                        </li>
                        <li className="ml-2 text-2xl flex-shrink-0 mt-4 hover:text-gray-300">
                            <Link to="/">Expense Tracker</Link>
                        </li>
                        <li className ="mt-4 ml-[900px] text-2xl hover:text-gray-300">
                            <Link to="/Transactions">Transactions</Link>
                        </li>
                        <li className ="mt-4 ml-[25px] text-2xl hover:text-gray-300">
                            <Link to="/Calendar">Calendar</Link>
                        </li>
                        <li className ="mt-4 ml-[25px] text-2xl hover:text-gray-300">
                            <Link to="/Profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout;