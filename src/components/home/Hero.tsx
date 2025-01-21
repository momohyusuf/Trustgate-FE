import { CircleAlert, House, Shield, Users, Phone } from "lucide-react";
import CustomButton from "../ui/buttons/CustomButtom";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center container mx-auto pt-12 lg:pt-40 px-6 lg:px-0 relative overflow-hidden lg:overflow-visible">
      <img
        className="absolute hidden lg:block top-0 -left-[20rem] -z-10"
        src="/ellipse.svg"
        alt="Trust Gate logo"
      />
      <img
        className="absolute -top-[70px] lg:top-0 -right-[100px] lg:right-[10rem] -z-10"
        src="/ellipse.svg"
        alt="Trust Gate logo"
      />
      <div className=" hidden lg:flex gap-12 flex-col px-4 py-4 bg-primary-100 rounded-full">
        {[House, CircleAlert, Shield, Users, Phone].map((Icon, index) => (
          <div
            key={index}
            className="hover:bg-tertiary-100 p-3 transition-all duration-300 rounded-md cursor-pointer"
          >
            <Icon size={30} strokeWidth={2.25} />
          </div>
        ))}
      </div>
      <div className="grid gap-6 max-w-[900px]">
        <p className="text-center lg:text-left font-inter text-primary-400 text-lg font-light">
          Top Rated Service
        </p>
        <h1 className="font-bold text-center lg:text-left leading-snug lg:leading-[64px] font-playfair text-3xl lg:text-6xl text-grey-600 tracking-wider">
          Premium Quality Online Sms Verification Service
        </h1>
        <p className="text-base font-inter text-grey-600 leading-[25px] max-w-[430px]">
          Safeguard your online identity with our fast SMS verification service,
          using disposable one-time numbers for ultimate privacy and security!
        </p>
        <div className="flex gap-6 ">
          <CustomButton
            text="Get started"
            variant="primary"
            onClick={() => console.log("Get started")}
          />
          <Link to="/about-us">
            <CustomButton
              text="About Us"
              variant="secondary"
              onClick={() => console.log("Get started")}
            />
          </Link>
        </div>
      </div>
      <div>
        {/* for desktop */}
        <img
          className="hidden lg:block absolute -right-[70px] top-44 w-[600px]"
          src="/images/home/iPhone14.png"
          alt="Hero"
        />
        {/* for mobile */}
        <img
          className="lg:hidden w-[400px]"
          src="/images/home/mobile-iPhone14.png"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
