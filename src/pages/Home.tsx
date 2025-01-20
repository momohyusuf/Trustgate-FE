// Desc: Home page component.
import Hero from "../components/home/Hero";
import OurServices from "../components/home/OurServices";
import WhatTheyAreSayingAboutUs from "../components/home/WhatTheyAreSayingAboutUs";
import WhyTrustGate from "../components/home/WhyTrustGate";

const Home = () => {
  return (
    <section>
      <Hero />
      <OurServices />
      <WhyTrustGate />
      <WhatTheyAreSayingAboutUs />
    </section>
  );
};

export default Home;
