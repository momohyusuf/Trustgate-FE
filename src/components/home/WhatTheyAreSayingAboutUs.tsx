import React from "react";
import Carousel from "../ui/CarouselSlider";

const WhatTheyAreSayingAboutUs = () => {
  return (
    <section className="py-12 lg:py-20">
      <p className="text-primary-400 text-lg font-light font-inter text-center mb-6">
        A lot of users chose Trusgate enterprise!
      </p>
      <h2 className="text-2xl text-center lg:text-5xl font-playfair font-bold text-grey-600 px-6 max-w-[900px] mx-auto tracking-wide leading-10 lg:leading-[4rem]">
        What Our Users Says About Us
      </h2>

      <Carousel>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="embla__slide">
            <ReviewCard />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default WhatTheyAreSayingAboutUs;

function ReviewCard() {
  return (
    <div className="bg-primary-100 mr-1rem p-6 rounded-lg shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        <img
          className="rounded-full w-16 h-16"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT15m1zlN0XxCPpn4e7Z4n5HzVz4IhKDjTCbi9PVaO_yIXGXRLrxgLdx51HyxOz8XTLNwYqtwm_QLBD_HXlPcZquw"
          alt=""
        />
        <div>
          <h3 className="text-inter font-semibold text-lg">Ayomide O.</h3>
          <p className="text-grey-400">Lagos, Nigeria</p>
        </div>
      </div>
      {/* yello star ratings */}

      <div className="mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#DC6E00] text-lg">
            ★
          </span>
        ))}
      </div>

      <p className="text-grey-600">
        "TrustGate Enterprise is a game-changer! Seamless virtual numbers,
        secure verification, and super-fast setup—perfect for busy schedules.
        Highly recommend for reliable numbers in Nigeria!"
      </p>
    </div>
  );
}
