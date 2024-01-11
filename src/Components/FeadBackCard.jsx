import React from 'react';
import { quotes } from '../assets';
import styles from '../style';

const FeadBackCard = ({content,title,name,img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img className='w-[42px] h-[27px] object-contain' src={quotes} alt="" />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
      <div className='flex justify-start items-center'>
        <img className='w-[48px] h-[48px] object-contain' src={img} alt="" />
        <div className='flex flex-col justify-start ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white '> {name}</h4>
          <p className={`${styles.paragraph}`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeadBackCard;