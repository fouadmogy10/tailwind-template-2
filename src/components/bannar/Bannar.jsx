import React from "react";
import "./bannar.css"
const Bannar = () => {
  return (
    <section className="my-[70px] bannar">
      <div className="py-16 flex items-center justify-center ">
        <div className="text-center max-container">
          <h2 className="lg:text-[2rem] text-[1.2rem] text-white">
            Plan your travel now and get in touch with us.
          </h2>
          <p className="text-[#ffffffa2] mb-4 lg:text-[1.25rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            fugit?
          </p>
          <button className="spcBtn ">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
