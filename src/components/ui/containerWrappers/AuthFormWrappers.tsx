import React from "react";

const AuthFormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto  relative overflow-hidden lg:overflow-visible">
      <img
        className="absolute hidden lg:block top-0 -left-[20rem] -z-10"
        src="/ellipse.svg"
        alt="Trust Gate logo"
      />
      <img
        className="absolute hidden lg:block -top-[70px] lg:top-0 -right-[100px] lg:right-[10rem] -z-10"
        src="/ellipse.svg"
        alt="Trust Gate logo"
      />

      {children}
      <img
        className="absolute -bottom-[80px]  lg:-bottom-[250px] -right-[100px] lg:right-[10rem] -z-10 rotate-90 w-[500px] "
        src="/ellipse-rounded.svg"
        alt="Trust Gate logo"
      />
      <img
        className="absolute -bottom-[250px] hidden lg:block -left-[300px]  -z-10 rotate-90 w-[500px]"
        src="/ellipse-rounded.svg"
        alt="Trust Gate logo"
      />
    </section>
  );
};

export default AuthFormWrapper;
