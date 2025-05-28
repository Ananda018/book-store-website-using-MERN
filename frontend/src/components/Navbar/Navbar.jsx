import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  const links = [
    {
      title: "Home",
      link: "/",
    },

    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Admin Profile",
      link: "/profile",
    },
  ];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role=useSelector((state) => state.auth.role);
  if(isLoggedIn===false){
    links.splice(2, 3)
  }
  if(isLoggedIn===true && role==="user"){
    links.splice(4, 1)
  }
  if(isLoggedIn===true && role==="admin"){
    links.splice(2, 2)
  }
  const [MobileNav, setMobileNav] = useState("hidden");

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-10 me-4" src="./logo.png" alt="logo" />

          <h1 className="text-2xl font-semibold">ThinkBound</h1>
        </Link>
        <div className="nav-links-bookheaven block md:flex items-center gap-4 ">
          <div className="hidden md:flex gap-4">
            {links.map((items, i) => (
              <div className=" flex items-center ">{items.title==="Profile" || items.title==="Admin Profile" ? <Link
                to={items.link}
                className="px-4 py-1 border border-blue-500 hover:bg-white hover:text-zinc-800 transition-all duration-300 rounded transition-all duration-300"
                key={i}
              >
                {items.title}
              </Link> : <Link
                to={items.link}
                className="hover:text-blue-500 transition-all duration-300"
                key={i}
              >
                {items.title}
              </Link>}</div>
            ))}
          </div>
          {isLoggedIn===false && <div className="hidden md:flex gap-4">
            <Link
              to="/LogIn"
              className="px-4 py-1 border border-blue-500 hover:bg-white hover:text-zinc-800 transition-all duration-300 rounded transition-all duration-300 "
            >
              LogIn
            </Link>
            <Link
              to="/SignUp"
              className="px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300 "
            >
              SignUp
            </Link>
          </div>}
          <button
            className="block md:hidden text-white text-2xl hover:text-zinc-300 "
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <HiOutlineBars3 />
          </button>
        </div>
      </nav>
      <div
        className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((items, i) => (
          <Link
            to={items.link}
            className={`${MobileNav} text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300`}
            key={i}
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            {items.title}
          </Link>
        ))}
        {isLoggedIn===false && <><Link
          to="/LogIn"
          className={`${MobileNav} px-8 py-2 mb-8 text-3xl font-semibold border border-blue-500 text-white hover:bg-white hover:text-zinc-800 transition-all duration-300 rounded`}
          onClick={() =>
            MobileNav === "hidden"
              ? setMobileNav("block")
              : setMobileNav("hidden")
          }
        >
          LogIn
        </Link>
        <Link
          to="/SignUp"
          className={`${MobileNav} px-8 py-2 mb-8 text-3xl font-semibold bg-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300 `}
          onClick={() =>
            MobileNav === "hidden"
              ? setMobileNav("block")
              : setMobileNav("hidden")
          }
        >
          SignUp
        </Link></>}
      </div>
    </>
  );
}
export default Navbar;
