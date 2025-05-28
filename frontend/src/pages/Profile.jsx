import { useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import MobileNav from "../components/profile/MobileNav";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      try {
        const response = await axios.get(
          "https://thinkbound.onrender.com/api/v1/get-user-information",
          { headers }
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchData();
  }, []);

  if (!profile) {
    return (
      <div className="w-full h-screen bg-zinc-900 flex items-center justify-center overflow-x-hidden">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 px-4 md:px-6 py-6 flex flex-col lg:flex-row gap-6 text-white min-h-screen overflow-x-hidden">
      <div className="w-full lg:w-1/5">
        <Sidebar data={profile} />
        <MobileNav />
      </div>
      <div className="w-full lg:w-4/5">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
