import React from "react";
import styles, { layout } from "../style";
import { apple, google } from "../assets";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          className="w-[100%] h-[100%] relative z-[5] object-contain"
          src="https://i.ibb.co/1qv3tLV/bill.png"
          alt=""
        />
        <div className="absolute z-[0] w-[100%] h-[100%] -left-[100%] rounded-full blue__gradient"/>
        {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        */}
      </div> 

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer " src={apple} alt="" />
          <img className="w-[128px] h-[42px] object-contain  cursor-pointer " src={google} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
