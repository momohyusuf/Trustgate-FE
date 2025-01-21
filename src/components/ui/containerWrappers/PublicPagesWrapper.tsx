import React from "react";

const PublicPagesWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto pt-12 lg:pt-40 px-6 lg:px-0 relative overflow-hidden lg:overflow-visible">
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

      {children}
    </section>
  );
};

export default PublicPagesWrapper;
