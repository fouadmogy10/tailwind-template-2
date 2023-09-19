import { AiFillCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import "./nav.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [show, setshow] = useState("hide");
  const navLinks = [
    { lable: "Destnation", href: "#Destnation" },
    { lable: "About-us", href: "#About-us" },
    { lable: "Services", href: "#Services" },
    { lable: "Gallery", href: "#Gallery" },
  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>OU -Trip</title>
          <meta name="description" content="Prefect SEO" />
          <meta charSet="UTF-8" />
        </Helmet>
      </HelmetProvider>
      <nav className="border-b-orange-600 border-b-4 z-50">
        <div className="max-container py-1 flex items-center justify-between ">
          <div className="flex items-center font-bold">
            <BiLogoMediumOld color="#ff5a1f" size={70} />
            <span className="text-[#ff5a1f]">OU</span>-Trip
          </div>
          <div>
            <ul className={"  lg:flex items-center hidden"}>
              {navLinks.map((item) => (
                <a
                  href={item.href}
                  onClick={() => {
                    settoggle(false);
                    setshow("hide");
                  }}
                  key={item.lable}
                >
                  <li className="px-2 hover:bg-white hover:text-orange-700 transition-all ">
                    {item.lable}
                  </li>
                </a>
              ))}
              <button className="spcBtn">Sign Up</button>
            </ul>
          </div>
          <div className="lg:hidden z-50">
            {toggle ? (
              <AiFillCloseCircle
                className="relative lg:hidden"
                cursor={"pointer"}
                onClick={() => {
                  settoggle(!toggle);
                  setshow("hide");
                }}
              />
            ) : (
              <FaBars
                className="relative  "
                cursor={"pointer"}
                onClick={() => {
                  settoggle(!toggle);
                  setshow("show");
                }}
              />
            )}
            <ul
              className={
                "  z-10 absolute bg-orange-300 text-white w-[300px]  text-center rounded-lg  p-5 " +
                show
              }
            >
              {navLinks.map((item) => (
                <a
                  key={item.lable}
                  href={item.href}
                  onClick={() => {
                    settoggle(false);
                    setshow("hide");
                  }}
                >
                  <li className="mb-3 w-[100px] mx-auto hover:bg-white hover:text-orange-700 transition-all ">
                    {item.lable}
                  </li>
                </a>
              ))}
              <button className="spcBtn">Sign Up</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
