import { NavLink } from "react-router";
import "../../index.css";
import About from "../../Pages/About/About";

const Navbar = () => {
  return (
    <div id="nav-bar ">
      <div className="max-w-[1170px] mx-auto">
        <div className="navbar gap-4 p-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn lg:hidden mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <nav
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavLink
                  className="py-2 px-5 rounded-lg border-transparent"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="py-2 px-5 rounded-lg border-transparent"
                  to="/listedBooks"
                >
                  Listed Books
                </NavLink>
                <NavLink
                  className="py-2 px-5 rounded-lg border-transparent"
                  to="/about"
                >
                  Pages to Read
                </NavLink>
              </nav>
            </div>
            <NavLink className="text-[28px] font-bold" to="/">
              BoiPoka
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <nav className="menu menu-horizontal px-1 space-x-5 text-lg">
              <NavLink
                className="py-2 px-5 rounded-lg border-transparent"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="py-2 px-5 rounded-lg border-transparent"
                to="/listedBooks"
              >
                Listed Books
              </NavLink>
              <NavLink
                className="py-2 px-5 rounded-lg border-transparent"
                to="/about"
              >
                Pages to Read
              </NavLink>
            </nav>
          </div>
          <div className="navbar-end flex gap-5 text-white">
            <button className="py-2 px-5 bg-[#23BE0A] rounded-lg border-1 hidden md:block border-transparent">
              Sing In
            </button>
            <button className="py-2 px-5 bg-[#59C6D2] rounded-lg border-1 border-transparent">
              Sing Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
