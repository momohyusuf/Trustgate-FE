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
          className={`fixed top-0 left-0 z-50 h-full transition-all duration-300 bg-[#F0F0FA] w-[96%] animate-fade  animate-delay-200 lg:hidden`}
        >
          <MobileSidebar
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
          />
        </div>
      )}
      <div className="hidden sticky top-0 lg:block w-[25%] min-h-screen bg-white">
        <DesktopSidebar />
      </div>
      <div className=" w-full lg:w-[75%] h-full">
        <img
          className="absolute hidden lg:block top-0  right-[15rem] z-10"
          src="/ellipse.svg"
          alt="Trust Gate logo"
        />

        <img
          className="absolute -bottom-[5rem] right-[1rem] lg:right-[15rem]  -z-2 rotate-90"
          src="/ellipse-rounded.svg"
          alt="Trust Gate logo"
        />
        <UserNavbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <div className="p-8 lg:p-16 relative z-10 ">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default UserDashBoardLayout;
