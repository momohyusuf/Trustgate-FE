import { NavLink, useLocation, useNavigate } from "react-router";
import CustomButton from "../buttons/CustomButtom";
import { Tooltip } from "antd";

import { HelpCircle, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return location.pathname.includes("reset-password") ? null : (
    <header className="bg-primary-100 ">
      <nav className="flex justify-between items-center p-4 container mx-auto">
        <NavLink to={"/"}>
          <img src="/logo.svg" alt="Trust Gate logo" />
        </NavLink>

        <div className="flex items-center gap-4">
          {location.pathname.includes("auth") ? null : (
            <div className="flex gap-4 items-center">
              <div className="bg-secondary-100 p-3 rounded-md cursor-pointer">
                <HelpCircle size={20} strokeWidth={2.25} />
              </div>

              <Tooltip color="#787AD6" title="Login">
                <NavLink to={"/auth/login"}>
                  <div className="bg-secondary-100 p-3 rounded-md cursor-pointer">
                    <User size={20} strokeWidth={2.25} />
                  </div>
                </NavLink>
              </Tooltip>
            </div>
          )}

          <div className="hidden md:flex gap-5">
            {location.pathname.includes("auth") ? (
              <CustomButton
                text={
                  location.pathname.includes("login") ? "Register" : "Login"
                }
                variant="primary"
                onClick={() => {
                  navigate(
                    location.pathname.includes("login")
                      ? "/auth/register"
                      : "/auth/login"
                  );
                }}
              />
            ) : null}
            <CustomButton
              text="Contact Us"
              variant={
                location.pathname.includes("auth") ? "secondary" : "primary"
              }
              onClick={() => console.log("Contact Us")}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
