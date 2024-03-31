import React from 'react';
import image1 from '../images/porsche-911-gt3-rs-7779707_1280.png';
import image2 from '../images/satellite-2318506_1280.png';
export default function AboutUs() {
    return (
        <div class=" h-[52vh] md:h-[42vh] flex justify-center items-center lg:h-screen bg-gradient-to-b from-black to-navy text-white 
        ">
        <div>
          <h1 class=" lg:text-6xl  md:text-5xl md:pt-0 text-center pb-4 pt-5 font-abc">Rapid Driver</h1>
          <div class='flex justify-center'>
      
            <p class="text-white bg-navy w-full  mx-10 lg:ml-20 rounded-lg sm:text-medium  lg:text-xl lg:w-1/2 h-30 text-center md:text-xl flex flex-col justify-center mt-5 font-xyz">
              <strong>mission</strong> At RapDriver we redefine the transportation experience by providing safe, reliable, and convenient rides to our passengers, while empowering our drivers with opportunities for economic growth and personal development. We are committed to fostering a community-driven platform that prioritizes inclusivity, sustainability, and excellence in every journey we facilitate.
            </p>
            <img src={image1} alt="Example Image" class=" hidden  w-1/3 h-50 transition-transform transform hover:-translate-x-1 hover:scale-110 z-0 lg:block" />
      
          </div>
        </div>
      </div>
    )      
}
