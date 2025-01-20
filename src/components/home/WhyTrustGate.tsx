import { whyTrustGate } from "../../constants/home";

const WhyTrustGate = () => {
  return (
    <section className="z-20 relative py-16 px-2 lg:px-0 flex flex-col items-center gap-8 max-w-[1200px] mx-auto">
      <p className="text-primary-400 text-lg font-light font-inter">
        Why Trustgate enterprise
      </p>
      <h2 className="text-2xl lg:text-5xl font-playfair font-bold text-grey-600 px-6 text-center max-w-[900px] tracking-wide leading-10 lg:leading-[4rem]">
        People choose us because we set the standard for quality!
      </h2>

      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between lg:h-[670px] lg:overflow-hidden">
        <div className="grid gap-6 ">
          {whyTrustGate.map((trust, index) => (
            <div
              className="bg-primary-100 p-4 rounded-tr-lg border-b-2 flex items-center gap-6 font-medium font-inter tracking-wide"
              key={index}
            >
              <img src={`images/home/${trust.image}`} alt={trust.title} />
              <h3>{trust.title}</h3>
            </div>
          ))}
        </div>
        <img
          className="hidden lg:block"
          src="images/home/whytrust-gate-iPhone14.png"
          alt="Why trust gate"
        />
      </div>
    </section>
  );
};

export default WhyTrustGate;
