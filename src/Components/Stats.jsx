import React from 'react';
import { stats } from '../Constants/data';
import styles from '../style';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb:6`}>
      {
        stats.map((stat)=>(
          <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
              <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[35px] ledading-[43px] text-white '>{stat.value}</h1>
              <p className='font-poppins  xs:text-[20px] text-[16px] xs:leading-[26px] ledading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
          </div>
        ))
      }
    </section>
  );
};

export default Stats;