import React from 'react';
import ImageA from '../images/New-mtn-logo.jpg';
import ImageB from '../images/rwandair.png';
import ImageC from '../images/world-bank.jpg';
import ImageD from '../images/Flag_of_the_United_Nations.svg.png';

export default function Companies() {
  return (
    <div id="my-div" className='bg-navy pb-10 sm:pt-24 md:pt-32 pt-72'>
      <h1 className='sm:text-xl flex justify-center font-bold font-xyz text-3xl text-white py-10'> Our Partners </h1>
      <div className='flex flex-wrap justify-evenly overflow-hidden'>
        <img src={ImageA} alt="Example Image" className='w-1/7 h-auto max-w-[150px] max-h-[150px] rounded-xl mb-5' />
        <img src={ImageB} alt="Example Image" className='w-1/7 h-auto max-w-[150px] max-h-[150px] rounded-xl mb-5' />
        <img src={ImageC} alt="Example Image" className='w-1/7 h-auto max-w-[150px] max-h-[150px] rounded-xl mb-5' />
        <img src={ImageD} alt="Example Image" className='w-1/7 h-auto max-w-[150px] max-h-[150px] rounded-xl mb-5' />
      </div>
    </div>
  );
}
