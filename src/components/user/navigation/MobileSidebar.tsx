import { useLocation, useNavigate } from "react-router";
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
  const navigate = useNavigate();

  return (
    <aside
      className={`flex flex-col  h-screen p-8 lg:p-16 bg-primary-100 relative transition-all duration-300`}
    >
      <img
        className="absolute bottom-[5rem]  -left-[10rem]  -z-5 rotate-180"
        src="/ellipse-rounded.svg"
        alt="Trust Gate logo"
      />
      <div className="mb-[2rem] flex justify-between items-center">
        <img className="w-32" src="/logo.svg" alt="Trustgate" />
        <button type="button" onClick={() => setShowSidebar(false)}>
          <img src="/close-icon.png" alt="close trustgate side bar" />
        </button>
      </div>
      <nav className="flex flex-col mb-auto relative z-20">
        {userRoutes.map((route) => (
          <p
            className={`flex items-center text-sm lg:text-base gap-4 border-b  hover:bg-tertiary-100 p-3 lg:p-4 rounded-md transition-all duration-300  ${
              currentPath === route.to ? "bg-tertiary-100" : ""
            }`}
            key={route.id}
            onClick={() => {
              setShowSidebar(false);
              navigate(
                `${route.to === "dashboard" ? "" : "/dashboard/" + route.to}`
              );
            }}
          >
            {route.icon}
            <span className="whitespace-nowrap"> {route.title}</span>
          </p>
        ))}
      </nav>

      <div className="flex justify-between p-4 relative z-20 pb-8">
        <p
          onClick={() => {
            setShowSidebar(false);
            navigate("/dashboard/account-settings");
          }}
          className="flex gap-4"
        >
          <Settings strokeWidth={2.5} />
          <span>Account Settings</span>
        </p>

        <button className="text-primary-400" type="button" title="Log out">
          <LogOut />
        </button>
      </div>
    </aside>
  );
};

export default MobileSidebar;
