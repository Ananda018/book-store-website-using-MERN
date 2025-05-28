import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import SeeUserData from "./SeeUserData";
function AllOrders() {
  const [AllOrders, setAllOrders] = useState();
  const [option, setOption] = useState(-1);
  const [Values, setValues] = useState({ status: "" });
  const [userdiv, setuserDiv] = useState("hidden");
  const [userdivData, setuserDivData] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://thinkbound.onrender.com/api/v1/get-all-orders",
        { headers }
      );
      setAllOrders(response.data.data);
    };
    fetch();
  }, [AllOrders]);
  const change = (e) => {
    const { value } = e.target;
    setValues({ status: value });
  };
  const submitChanges = async (i) => {
    const id = AllOrders[i]._id;
    const responce = await axios.put(
      `https://thinkbound.onrender.com/api/v1/update-status/${id}`,
      Values,
      { headers }
    );
    alert(responce.data.message);
  };

  return (
    <>
      {!AllOrders && (
        <div className=" h-[100%]   flex items-center justify-center ">
          <Loader />
        </div>
      )}

      {AllOrders && AllOrders.length > 0 && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            All Orders
          </h1>
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 ">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>
            <div className="w-[40%] md:w-[22%]">
              <h1 className="text-center">Books</h1>
            </div>
            <div className="w-0 md:w-[40%] hidden md:block">
              <h1 className="text-center">Descriotion</h1>
            </div>
            <div className="w-[17%] md:w-[10%] ">
              <h1 className="text-center">Price</h1>
            </div>
            <div className="w-[30%] md:w-[15%] ">
              <h1 className="text-center">Status</h1>
            </div>
            <div className="w-[10%] md:w-[5%]  ">
              <h1 className="text-center">
                <FaUserLarge />
              </h1>
            </div>
          </div>
          {AllOrders.map((items, i) => (
            <div
              className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer"
              key={i}
            >
              <div className="w-[3%]">
                <h1 className="text-center">{i + 1}</h1>
              </div>
              <div className="w-[40%] md:w-[22%]">
                <Link
                  to={`/view-book-details/${items.book._id}`}
                  className="hover:text-blue-500 "
                >
                  <h1 className="text-center"> {items.book.title}</h1>
                </Link>
              </div>
              <div className="w-0 md:w-[40%] hidden md:block">
                <h1 className="text-center">
                  {items.book.desc.slice(0, 50)} ....
                </h1>
              </div>
              <div className="w-[17%]  md:w-[10%]">
                <h1 className="text-center">₹ {items.book.price}</h1>
              </div>
              <div className="w-[30%] md:w-[15%] ">
                <h1 className="font-semibold text-center">
                  <button
                    className="hover:scale-105 items-center"
                    onClick={() => setOption(i)}
                  >
                    {items.status === "Out for delivered" ? (
                      <div className="text-yellow-500 ">{items.status}</div>
                    ) : items.status === "Canceled" ? (
                      <div className="text-red-500 ">{items.status}</div>
                    ) : (
                      <div className="text-green-500">{items.status}</div>
                    )}
                  </button>
                  <div
                    className={`${
                      option === i ? "flex" : "hidden"
                    } items-center`}
                  >
                    <select
                      name="ststus"
                      id=""
                      className="bg-gray-800 text-center"
                      onChange={change}
                      value={Values.status}
                    >
                      {[
                        "Order Placed",
                        "Out for delivered",
                        "Delivered",
                        "Canceled",
                      ].map((items, i) => (
                        <option value={items} key={i}>
                          {items}
                        </option>
                      ))}
                    </select>
                    <button
                      className="text-green-500 hover:text-pink-600 mx-2 "
                      onClick={() => {
                        setOption(-1);
                        submitChanges(i);
                      }}
                    >
                      <FaCheck />
                    </button>
                  </div>
                </h1>
              </div>
              <div className="w-[10%] md:w-[2%] text-center">
                <button
                  className="text-xl hover:text-orange-500"
                  onClick={() => {
                    setuserDiv("fixed");
                    setuserDivData(items.user);
                  }}
                >
                  <IoOpenOutline />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {userdivData && (
        <SeeUserData
          userdivData={userdivData}
          userdiv={userdiv}
          setuserDiv={setuserDiv}
        />
      )}
    </>
  );
}
export default AllOrders;
