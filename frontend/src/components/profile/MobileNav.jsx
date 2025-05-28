import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function MobileNav() {
  const role=useSelector((state)=>state.auth.role)
  return <>{role==="user" && <div className="w-full flex flex-row items-center justify-between gap-2 mt-4 lg:hidden">
    <Link
      to="/profile"
      className="flex-1 text-zinc-100 font-semibold py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
    >
      Favourites
    </Link>
    <Link
      to="/profile/orderHistory"
      className="flex-1 text-zinc-100 font-semibold py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
    >
      Order History
    </Link>
    <Link
      to="/profile/settings"
      className="flex-1 text-zinc-100 font-semibold py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
    >
      Settings
    </Link>
  </div> }
  {role==="admin" && <div className="w-full flex flex-row items-center justify-between gap-2 mt-4 lg:hidden">
    <Link
      to="/profile"
      className="flex-1 text-zinc-100 font-semibold py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
    >
      All Orders
    </Link>
    <Link
      to="/profile/add-book"
      className="flex-1 text-zinc-100 font-semibold py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
    >
       Add Books
    </Link>
    <Link
      to="/profile/settings"
      className="flex-1 text-zinc-100 font-semibold py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
    >
      Settings
    </Link>
  </div>}
  </>
    
  
}

export default MobileNav;
