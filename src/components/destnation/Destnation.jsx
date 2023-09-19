import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiBankCard2Fill } from "react-icons/ri";
import pic1 from "../../assets/img/pic1.jpg";
import pic2 from "../../assets/img/pic2.jpg";
import pic3 from "../../assets/img/pic3.jpg";
import pic4 from "../../assets/img/pic4.jpg";
import "./destnation.css";
const Destnation = () => {
  return (
    <section className="max-container" id="Destnation">
      <div className="title text-center">
        <span className="uppercase text-orange-500 font-bold">explore now</span>
        <h1 className="capitalize  font-bold text-[40px]">
          find your dream destnation
        </h1>
        <p className="capitalize text-gray-400">
          fill in field below to find the best spot for your next tour
        </p>
      </div>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 p-10 grid-cols-1 sm:gap-6 gap-10">
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-r-0 bg-orange-100  border-gray-300  rounded-l-3xl ">
            <CiLocationOn />
          </span>
          <input
            type="text"
            id="website-admin1"
            className="rounded-none border-l-0 border bg-orange-100  border-gray-300 text-gray-900 focus:border-transparent block flex-1 min-w-0 w-full text-sm p-2.5  rounded-r-3xl focus:border-l-transparent focus:ring-0"
            placeholder="Location"
          />
        </div>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-r-0 bg-orange-100  border-gray-300  rounded-l-3xl ">
            <RiBankCard2Fill />
          </span>
          <input
            type="text"
            id="website-admin2"
            className="rounded-none border-l-0 border bg-orange-100  border-gray-300 text-gray-900 focus:border-transparent block flex-1 min-w-0 w-full text-sm p-2.5  rounded-r-3xl focus:border-l-transparent focus:ring-0"
            placeholder="Budget"
          />
        </div>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-r-0 bg-orange-100  border-gray-300  rounded-l-3xl "></span>
          <input
            type="date"
            id="website-admin3"
            className="rounded-none border-l-0 border bg-orange-100  border-gray-300 text-gray-900 focus:border-transparent block flex-1 min-w-0 w-full text-sm p-2.5  rounded-r-3xl focus:border-l-transparent focus:ring-0"
            placeholder="Location"
          />
        </div>
        <button className="spcBtn">Search</button>
      </div>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 p-10 grid-cols-1 sm:gap-6 gap-10">
        
        <div className="relative isolate card-dest flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[100%] mx-auto  ">
          <img
            src={pic1}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
         <div className="flex items-center justify-between">
         <div className="main z-[44444444] text-white">
              <p>Seychelles</p>
              <span className="font-bold">Island</span>
              <p className="flex items-center">
                <CiLocationOn /> Indian Ocean
              </p>
            </div>
            <div className="rate p-1 z-[44444444] bg-slate-400 rounded-full">
              4.7
            </div>
         </div>
        </div>
        <div className="relative isolate card-dest flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[100%] mx-auto  ">
          <img
            src={pic2}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
         <div className="flex items-center justify-between">
         <div className="main z-[44444444] text-white">
              <p>Seychelles</p>
              <span className="font-bold">Island</span>
              <p className="flex items-center">
                <CiLocationOn /> Indian Ocean
              </p>
            </div>
            <div className="rate p-1 z-[44444444] bg-slate-400 rounded-full">
              4.7
            </div>
         </div>
        </div>
        <div className="relative isolate card-dest flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[100%] mx-auto  ">
          <img
            src={pic3}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
         <div className="flex items-center justify-between">
         <div className="main z-[44444444] text-white">
              <p>Seychelles</p>
              <span className="font-bold">Island</span>
              <p className="flex items-center">
                <CiLocationOn /> Indian Ocean
              </p>
            </div>
            <div className="rate p-1 z-[44444444] bg-slate-400 rounded-full">
              4.7
            </div>
         </div>
        </div>
        <div className="relative isolate card-dest flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[100%] mx-auto  ">
          <img
            src={pic4}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
         <div className="flex items-center justify-between">
         <div className="main z-[44444444] text-white">
              <p>Seychelles</p>
              <span className="font-bold">Island</span>
              <p className="flex items-center">
                <CiLocationOn /> Indian Ocean
              </p>
            </div>
            <div className="rate p-1 z-[44444444] bg-slate-400 rounded-full">
              4.7
            </div>
         </div>
        </div>
        <div className="relative isolate card-dest flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[100%] mx-auto  ">
          <img
            src={pic3}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
         <div className="flex items-center justify-between">
         <div className="main z-[44444444] text-white">
              <p>Seychelles</p>
              <span className="font-bold">Island</span>
              <p className="flex items-center">
                <CiLocationOn /> Indian Ocean
              </p>
            </div>
            <div className="rate p-1 z-[44444444] bg-slate-400 rounded-full">
              4.7
            </div>
         </div>
        </div>
        <div className="relative isolate card-dest flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[100%] mx-auto  ">
          <img
            src={pic4}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
         <div className="flex items-center justify-between">
         <div className="main z-[44444444] text-white">
              <p>Seychelles</p>
              <span className="font-bold">Island</span>
              <p className="flex items-center">
                <CiLocationOn /> Indian Ocean
              </p>
            </div>
            <div className="rate p-1 z-[44444444] bg-slate-400 rounded-full">
              4.7
            </div>
         </div>
        </div>
        <div className="relative isolate card-dest flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[100%] mx-auto  ">
          <img
            src={pic1}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
         <div className="flex items-center justify-between">
         <div className="main z-[44444444] text-white">
              <p>Seychelles</p>
              <span className="font-bold">Island</span>
              <p className="flex items-center">
                <CiLocationOn /> Indian Ocean
              </p>
            </div>
            <div className="rate p-1 z-[44444444] bg-slate-400 rounded-full">
              4.7
            </div>
         </div>
        </div>
        <div className="relative isolate card-dest transition-all flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[100%] mx-auto  ">
          <img
            src={pic2}
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
         <div className="flex items-center justify-between">
         <div className="main z-[44444444] text-white">
              <p>Seychelles</p>
              <span className="font-bold">Island</span>
              <p className="flex items-center">
                <CiLocationOn /> Indian Ocean
              </p>
            </div>
            <div className="rate p-1 z-[44444444] bg-slate-400 rounded-full">
              4.7
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Destnation;
