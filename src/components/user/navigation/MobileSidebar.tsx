import { Link, useLocation } from "react-router";
import { userRoutes } from "../../../constants/data.tsx";
import { Settings, LogOut } from "lucide-react";
import React from "react";

const MobileSidebar = ({
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  const currentPath =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  return (
    <aside
      className={`flex flex-col  h-full p-16 bg-primary-100 relative transition-all duration-300`}
    >
      <img
        className="absolute hidden lg:block top-0  left-[0rem] z-10"
        src="/ellipse.svg"
        alt="Trust Gate logo"
      />

      <img
        className="absolute -bottom-[3rem] hidden lg:block left-[0rem]  z-10 rotate-90"
        src="/ellipse-rounded.svg"
        alt="Trust Gate logo"
      />
      <div className="mb-[5rem] flex justify-between items-center">
        <img className="w-32" src="/logo.svg" alt="Trustgate" />
        <button type="button" onClick={() => setShowSidebar(false)}>
          <img src="/close-icon.png" alt="close trustgate side bar" />
        </button>
      </div>
      <nav className="flex flex-col mb-auto">
        {userRoutes.map((route) => (
          <Link
            className={`border-b  hover:bg-tertiary-100 p-4 rounded-md transition-all duration-300  ${
              currentPath === route.to ? "bg-tertiary-100" : ""
            }`}
            key={route.id}
            to={`${route.to === "dashboard" ? "" : "/dashboard/" + route.to}`}
          >
            <p className="flex items-center gap-4">
              {route.icon}
              <span className="whitespace-nowrap"> {route.title}</span>
            </p>
          </Link>
        ))}
      </nav>

      <div className="flex justify-between p-4">
        <Link className="flex gap-4" to="/user/account-settings">
          <Settings strokeWidth={2.5} />
          <span>Account Settings</span>
        </Link>

        <button className="text-primary-400" type="button" title="Log out">
          <LogOut />
        </button>
      </div>
    </aside>
  );
};

export default MobileSidebar;
