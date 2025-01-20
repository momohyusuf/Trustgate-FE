import CustomButton from "../buttons/CustomButtom";

import { HelpCircle, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-primary-100 ">
      <nav className="flex justify-between items-center p-4 container mx-auto">
        <img src="/logo.png" alt="Trust Gate logo" />

        <div className="flex items-center gap-4">
          <div className="bg-secondary-100 p-3 rounded-md cursor-pointer">
            <HelpCircle size={20} strokeWidth={2.25} />
          </div>
          <div className="bg-secondary-100 p-3 rounded-md cursor-pointer">
            <User size={20} strokeWidth={2.25} />
          </div>
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
