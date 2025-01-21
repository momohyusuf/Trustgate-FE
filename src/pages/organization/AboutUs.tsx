import PublicPagesWrapper from "../../components/ui/containerWrappers/PublicPagesWrapper";

const AboutUs = () => {
  return (
    <PublicPagesWrapper>
      <section className="max-w-[1000px] mx-auto mb-24">
        <h1 className="mb-16 font-bold text-center lg:text-left leading-snug lg:leading-[64px] font-playfair text-3xl lg:text-6xl text-grey-600 tracking-wider">
          About Us
        </h1>

        <p className="text-base text-center lg:text-left font-inter text-grey-600 mb-10">
          Welcome to TrustGate, your trusted gateway to secure and efficient
          online verification solutions. <br /> At TrustGate, we specialize in
          providing temporary virtual phone numbers that streamline SMS
          verification and account registrations across diverse platforms and
          regions. Our mission is to empower your online interactions by
          ensuring privacy, security, and ease of use every step of the way.{" "}
          <br /> We understand the value of protecting your digital identity.
          That’s why our services are designed to safeguard your information
          while granting you seamless access to the digital world. Whether it’s
          verifying accounts, managing registrations, or maintaining your
          privacy, TrustGate has you covered.
        </p>

        <div>
          <h3 className="text-lg lg:text-xl text-center lg:text-left font-medium font-inter mb-2">
            Why Choose TrustGate?
          </h3>
          <ul className="text-base font-inter text-grey-600 list-disc pl-6">
            {[
              "Privacy First: Protect your personal data with disposable,one-time-use numbers.",
              "Intuitive Experience: Navigate our user-friendly platform effortlessly.",
              "Global Access: Get virtual numbers tailored for multiple countries and services.",
              "Reliable Support: Our dedicated team is always here to help.",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="text-base font-inter  text-grey-600 mb-10">
            Launched in January 2025, TrustGate Enterprise is committed to
            innovation, security, and exceptional user satisfaction. We proudly
            serve individuals and businesses alike, offering a trusted solution
            for all your virtual phone number needs. <br /> At TrustGate, we
            bridge the gap between privacy and convenience. Let us be your
            gateway to a safer, smarter digital experience.
          </p>
        </div>
      </section>
    </PublicPagesWrapper>
  );
};

export default AboutUs;
