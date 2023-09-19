import React from "react";
import pic from "../../assets/img/img_3.webp";
import { BsAirplane } from "react-icons/bs";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { IoRestaurantOutline } from "react-icons/io5";
import { GiKidSlide } from "react-icons/gi";
const Services = () => {
  return (
    <section className="max-container" id="Services">
      <div className="title text-center">
        <h2 className="uppercase text-[35px]  text-orange-500 font-bold">
          Our Services
        </h2>
        <p className="capitalize my-5 text-gray-400 lg:w-5/12  mx-auto">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 items-center  md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1  grid-cols-1 sm:gap-6 gap-6">
        <div className="lg:col-span-1 md:col-span-1 col-span-3">
          <img
            src={pic}
            alt="pic"
            className=" w-full  sm:h-[450px] rounded-3xl object-cover"
          />
        </div>
        <div className="lg:col-span-2 md:col-span-2  grid grid-cols-1 md:grid-cols-2 sm:col-span-2   col-span-3  sm:gap-6 gap-10">
          <div className=" p-6 bg-[#dcdae145] rounded-3xl">
            <a href="#">
              <BsAirplane fontSize={"3.5rem"} color="#ff5a1fff" />
              <span className="font-bold text-[1.2rem] my-2">
                Easy & Free Transport
              </span>
            </a>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </p>
          </div>
          <div className=" p-6 bg-[#dcdae145] rounded-3xl">
            <a href="#">
              <LiaSwimmingPoolSolid fontSize={"3.5rem"} color="#ff5a1fff" />
              <span className="font-bold text-[1.2rem] my-2">Swimming Pool</span>
            </a>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </p>
          </div>
          <div className=" p-6 bg-[#dcdae145] rounded-3xl">
            <a href="#">
              <IoRestaurantOutline fontSize={"3.5rem"} color="#ff5a1fff" />
              <span className="font-bold text-[1.2rem] my-2">
              Delicious Food
              </span>
            </a>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </p>
          </div>
          <div className=" p-6 bg-[#dcdae145] rounded-3xl">
            <a href="#">
              <GiKidSlide fontSize={"3.5rem"} color="#ff5a1fff" />
              <span className="font-bold text-[1.2rem] my-2">
              Playground
              </span>
            </a>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
