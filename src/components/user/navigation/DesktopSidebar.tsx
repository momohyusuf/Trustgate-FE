import { Link, useLocation } from "react-router";
import { userRoutes } from "../../../constants/data.tsx";
import { Settings, LogOut } from "lucide-react";

const DesktopSidebar = () => {
  const location = useLocation();

  const currentPath =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  return (
    <aside className="flex flex-col  h-full p-16 bg-primary-100 relative">
      <img
        className="absolute hidden lg:block top-0  -left-[8rem] z-10"
        src="/ellipse.svg"
        alt="Trust Gate logo"
      />

      <img
        className="absolute -bottom-[3rem] hidden lg:block -left-[2rem]  -z-5 rotate-90"
        src="/ellipse-rounded.svg"
        alt="Trust Gate logo"
      />
      <img className="w-64 mb-[5rem] " src="/logo.svg" alt="Trustgate" />
      <nav className="flex flex-col mb-auto">
        {userRoutes.map((route) => (
          <Link
            className={`flex items-center gap-4 border-b  hover:bg-tertiary-100 p-4 rounded-md transition-all duration-300 ${
              currentPath === route.to ? "bg-tertiary-100" : ""
            }`}
            key={route.id}
            to={`${route.to === "dashboard" ? "" : "/dashboard/" + route.to}`}
          >
            {route.icon}
            <span> {route.title}</span>
          </Link>
        ))}
      </nav>

      <div className="flex justify-between p-4 relative z-10">
        <Link className="flex gap-4" to="/dashboard/account-settings">
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

export default DesktopSidebar;
