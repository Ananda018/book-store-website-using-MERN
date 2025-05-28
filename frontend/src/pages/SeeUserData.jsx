import { RxCross1 } from "react-icons/rx";
function SeeUserData({ userdivData, userdiv, setuserDiv }) {
  return (
    <>
      <div
        className={`${userdiv} top-0 left-0 h-screen w-full bg-zinc-800 opacity-80`}
      ></div>
      <div
        className={`${userdiv} top-0 left-0 h-screen w-full flex items-center justify-center`}
      >
        <div className="bg-white rounded p-4 w-[80%] md:w-[50%] lg:w-[40%] text-zinc-800">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">UserInfomation</h1>
            <button onClick={() => setuserDiv("hidden")}>
              <RxCross1 />
            </button>
          </div>
          <div className="mt-2">
            <label htmlFor="">
              Username:{" "}
              <span className="font-semibold">{userdivData.username}</span>
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="">
              Email: <span className="font-semibold">{userdivData.email}</span>
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="">
              Address: <span className="font-semibold">{userdivData.address}</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default SeeUserData;
