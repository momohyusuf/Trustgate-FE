import { NavLink } from "react-router";
import CustomButton from "../buttons/CustomButtom";
import { Tooltip } from "antd";

import { HelpCircle, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-primary-100 ">
      <nav className="flex justify-between items-center p-4 container mx-auto">
        <NavLink to={"/"}>
          <img src="/logo.png" alt="Trust Gate logo" />
        </NavLink>

        <div className="flex items-center gap-4">
          <div className="bg-secondary-100 p-3 rounded-md cursor-pointer">
            <HelpCircle size={20} strokeWidth={2.25} />
          </div>

          <Tooltip color="#787AD6" title="Login">
            <NavLink to={"/login"}>
              <div className="bg-secondary-100 p-3 rounded-md cursor-pointer">
                <User size={20} strokeWidth={2.25} />
              </div>
            </NavLink>
          </Tooltip>

          <div className="hidden md:flex">
            <CustomButton
              text="Contact Us"
              variant="primary"
              onClick={() => console.log("Contact Us")}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
