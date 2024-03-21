import React from 'react';
import image1 from '../images/porsche-911-gt3-rs-7779707_1280.png';
import image2 from '../images/satellite-2318506_1280.png';
export default function AboutUs() {
    return (
        <div class="flex justify-center items-center h-screen bg-gradient-to-b from-black to-navy text-white">
        <div>
          <h1 class="text-7xl text-center pb-4 font-abc">Rapid Driver</h1>
          <div class='flex justify-center'>
      
            <p class="text-white bg-navy w-1/2 ml-20 rounded-lg text-xl h-30 text-center flex flex-col justify-center mt-5 font-xyz">
              <strong>mission</strong> At RapDriver we redefine the transportation experience by providing safe, reliable, and convenient rides to our passengers, while empowering our drivers with opportunities for economic growth and personal development. We are committed to fostering a community-driven platform that prioritizes inclusivity, sustainability, and excellence in every journey we facilitate.
            </p>
            <img src={image1} alt="Example Image" class="w-1/3 h-50 transition-transform transform hover:-translate-x-1 hover:scale-110 z-0" />
      
          </div>
        </div>
      </div>
    )      
}
