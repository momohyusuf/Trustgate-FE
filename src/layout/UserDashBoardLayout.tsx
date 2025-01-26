import { Outlet } from "react-router";
import {
  UserNavbar,
  MobileSidebar,
  DesktopSidebar,
} from "../components/user/navigation";
import { useState } from "react";

const UserDashBoardLayout = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <section className="flex">
      {showSidebar && (
        <div
          className={`fixed top-0 left-0 z-50 h-full transition-all duration-300 bg-[#F0F0FA] w-[96%] animate-fade  animate-delay-200 md:hidden`}
        >
          <MobileSidebar
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
          />
        </div>
      )}
      <div className="hidden md:block w-[25%] h-screen bg-white">
        <DesktopSidebar />
      </div>
      <div className=" w-full lg:w-[75%] h-full">
        <UserNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default UserDashBoardLayout;
