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
      <div
        className={`fixed top-0 left-0 z-50 h-full transition-all duration-300  ${
          showSidebar
            ? "w-[80%] animate-fade animate-delay-200 "
            : "w-0 overflow-hidden opacity-10"
        } md:hidden`}
      >
        <MobileSidebar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
      </div>
      <div className="hidden md:block w-[25%] h-screen bg-white">
        <DesktopSidebar />
      </div>
      <div className="lg:w-[75%] h-full">
        <UserNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <Outlet />
      </div>
    </section>
  );
};

export default UserDashBoardLayout;
