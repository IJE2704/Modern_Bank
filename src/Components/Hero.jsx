import React from "react";
import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img className="w-[32px] h-[32px]" src={discount} alt="" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-[52px] ">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>{" "}
            <br className="sm:block hidden" /> Payment Method.
          
          </h1>
         <div className="ss:flex hidden md:mr-4">
         <GetStarted></GetStarted>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
