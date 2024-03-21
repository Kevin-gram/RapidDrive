import React from 'react';
import image1 from '../images/Kevin (2).jpg'; 
import image2 from '../images/Johnson (2).jpg';
import image3 from '../images/Prince.jpg';
import image4 from '../images/Cletien (2) (1).jpg';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {

  const breakpoints = {

      1280:{
          slidesPerView: 3,
          spaceBetween: 30,
      },
      1024:{
          slidesPerView: 2.5,
          spaceBetween: 30,
      },
      
      768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slideHeight:50,
      },
      720: {
          slidesPerView: 2,
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      540:{
          slidesPerView: 2,
          spaceBetween: 10, 
      },
      400:{
          slidesPerView: 1,
          spaceBetween: 2, 
      },
      320: {
          slidesPerView: 1,
      },
      280:{
          slidesPerView: 1,  
      },
      250:{
          slidesPerView: 1,  
      }
  };
  const images = [
      {
          img: image1,
          Name: 'Ngabo John',
          title: 'Founder and CEO',
          description:
              'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      },
      {
          img: image2,
          Name: 'Gisubizo Petience',
          title: 'Cheif executive officer',
          description:
              'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      },
      {
          img: image3,
          Name: 'Ngabo John',
          title: 'Founder and CEO',
          description:
              'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      },
      {
          img: image4,
          Name: 'Gisubizo Petience',
          title: 'Cheif executive officer',
          description:
              'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      },
      {
          img: image1,
          Name: 'Ngabo John',
          title: 'Founder and CEO',
          description:
              'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      },
      {
          img: image2,
          Name: 'Gisubizo Petience',
          title: 'Cheif executive officer',
          description:
              'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      },
      
  ];
  return (
      <div className=" p-4  latest bg-navy pt-5 h-full" id="Team">
          <div className='flex flex-col lg:flex-row'>
              <div className="lg:w-1/2 ml-10 text-white">
                  <div>
                  
                  </div>
                  <h1 className="text-3xl font-bold pt-4 ">OUR TEAM</h1>
              </div>
              <div className="lg:w-1/2 px-10 text-white">
                  <p className="pt-10 text-xl border-t-2">Our team is the heart and soul of everything we do. Comprised of passionate individuals with diverse backgrounds and expertise, we come together to achieve one common goal: delivering exceptional results for our clients..</p>
              </div>
          </div>

          <hr className="w-72" />


          <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={40}
              slidesPerView={3.2}
              breakpoints={breakpoints}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              autoplay={{ delay: 3000 }}
          >
              {images.map((image) => {
                  return (
                      <SwiperSlide className="mt-5 text-white">
                          <img src={image.img} alt="" className="rounded-t-xl"  style={{width: '70vh', height: '35vh',objectFit:'contain'}}/>
                          <h3 className="ml-1">{image.Name}</h3>
                          <h4 className="ml-1">{image.title}</h4>
                          <p className="font-sans text-sm ml-1">{image.description}</p>
                      </SwiperSlide>
                  );
              })}
      
          </Swiper>
</div>
  );
          }