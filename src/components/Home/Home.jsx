import { AiOutlineArrowRight } from "react-icons/ai"; 
import React from "react";
import "./home.css"
import video from "../../assets/video.mp4"
const Home = () => {
  return (
    <section className="home relative h-[89vh] w-[100%] top-0">
      <div className="video-wrapper absolute h-[100%] w-[100%]">
        <video autoPlay loop muted  className="w-[100%] h-[100%] object-cover " 
            >
              <source src={video} type="video/mp4"/>
            <track src="" kind="captions" srcLang="en" label="english_captions"/>
    <track src="" kind="captions" srcLang="es" label="spanish_captions"/>
        </video>
        <div className="absolute main-text text-center w-full sm:px-2 z-20">
          <h1 className="text-white lg:text-[52px] md:text-[47px]  text-[30px] font-bold">Travel, enjoy and live.</h1>
          <p className="text-gray-300 md:w-5/12 mx-auto my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate labore quas explicabo perspiciatis accusamus optio.</p>
          <button className="spcBtn flex mx-auto">Get Started <AiOutlineArrowRight /></button>
        </div>
        <div className="overlay absolute h-[100%] w-[100%] top-0 bject-cover"></div>
      </div>
    </section>
  );
};

export default Home;
