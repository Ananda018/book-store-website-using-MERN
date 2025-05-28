import { Link, useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import {useDispatch, useSelector} from "react-redux"
import {authActions}from "../../store/auth"

function Sidebar({ data }) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const role=useSelector((state)=>state.auth.role)
  return (
    <div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-full lg:h-screen w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <img
          src={data.avatar}
          alt="img"
          className="h-24 w-24 rounded-full object-cover max-w-full"
        />
        <p className="mt-3 text-xl text-zinc-100 font-semibold text-center">
          {data.username}
        </p>
        <p className="mt-1 text-sm text-zinc-300 text-center">{data.email}</p>
        <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>
      </div>

      {role==="user" && <div className="w-full flex-col items-center justify-center hidden lg:flex mt-4">
        <Link
          to="/profile"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Favourites
        </Link>
        <Link
          to="/profile/orderHistory"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Order History
        </Link>
        <Link
          to="/profile/settings"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Settings
        </Link>
      </div>}
      {role==="admin" && <div className="w-full flex-col items-center justify-center hidden lg:flex mt-4">
        <Link
          to="/profile"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          All Orders
        </Link>
        <Link
          to="/profile/add-book"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Add Books
        </Link>
        <Link
          to="/profile/settings"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Settings
        </Link>
      </div> }

      <button className="bg-zinc-900 w-full mt-4 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300" onClick={()=>{
        dispatch(authActions.logout())
        dispatch(authActions.changeRole("user"))
        localStorage.clear("id")
        localStorage.clear("token")
        localStorage.clear("role")
        navigate("/")
      }}>
        Log Out <TbLogout className="ms-2 h-5 w-5" />
      </button>
    </div>
  );
}

export default Sidebar;
