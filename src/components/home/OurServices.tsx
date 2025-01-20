import { ourServices } from "../../constants/home";
import CustomButton from "../ui/buttons/CustomButtom";

const OurServices = () => {
  return (
    <div className="bg-secondary-100 z-20 relative py-16 px-2 lg:px-0 lg:mt-[10rem] flex flex-col items-center gap-8">
      <h2 className="text-5xl font-playfair font-bold text-grey-600 px-6">
        Our Services
      </h2>
      <p className="text-center max-w-[600px] text-grey-600 px-6 font-light font-inter">
        {" "}
        Utilize temporary disposable numbers for SMS verification, account
        registration across multiple countries, and tailored services.
      </p>

      <p className="fond-semibold underline font-inter">
        Some of Our Offered Services
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0.15rem] ">
        {ourServices.map((service, index) => (
          <div
            key={index}
            className="flex bg-white items-center gap-4 p-5 lg:p-10"
          >
            <img
              src={`/images/home/${service}.png`}
              alt={`Trust gate service ${service}`}
            />
            <p className="tracking-wide capitalize">{service}</p>
          </div>
        ))}
      </div>

      <CustomButton
        text="Buy now"
        variant="primary"
        onClick={() => console.log("View All Services")}
      />
    </div>
  );
};

export default OurServices;
