import React from "react";
import { AlignJustify } from "lucide-react";
const UserNavbar = ({
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <nav className="bg-primary-100 px-8 py-4 font-inter">
      <div className="hidden lg:flex justify-between items-center">
        <p className="text-lg italic">
          Ready for a seamless verification?{" "}
          <span className="text-grey-400">Lets get started!</span>
        </p>
        <div>
          <p className="font-semibold text-grey-600 ">Obedience223</p>
          <p className=" font-light text-grey-400">obediencejohn@yahoo.com</p>
        </div>
      </div>

      <div className="font-playfair lg:hidden w-full flex justify-between items-center">
        <button onClick={() => setShowSidebar(true)} className="mr-auto">
          {" "}
          <AlignJustify size={32} strokeWidth={0.75} />
        </button>
        <h3 className="text-4xl h-12 w-12 font-bold bg-primary-400 text-white rounded-full flex items-center justify-center">
          O
        </h3>
      </div>
    </nav>
  );
};

export default UserNavbar;
