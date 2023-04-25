import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings, FiPower } from "react-icons/fi";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import Link from "next/link";

const Sidebar = ({ children }) => {
  let navigate = useRouter();
  const { pathname } = useRouter();

  const logout = () => {
    deleteCookie("token");
    navigate.push("/login");
  };

  if (pathname === "/login" || pathname === "/register") {
    return children;
  }

  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/dashboard">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/dashboard">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/dashboard/users">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/dashboard/settings">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
          <button onClick={logout}>
            <div className="bg-red-500 hover:bg-red-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiPower size={20} />
            </div>
          </button>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
