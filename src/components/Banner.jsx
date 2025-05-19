import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import s1 from '../assets/slide1.jpg';
import s2 from '../assets/slide2.jpg';
import s3 from '../assets/slide3.jpg';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={s1} alt="Grow Together" className="w-full h-full object-cover " />
          <div className="absolute inset-0    bg-gradient-to-t from-black/60 via-black/40 to-black/30  flex flex-col items-center justify-center space-y-6 px-4 text-center">
            <p className="text-white text-3xl font-bold">Grow Together</p>
            <button className="bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-green-100 transition">
              Get Started
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={s2} alt="Urban Gardening Made Simple" className="w-full h-full object-cover " />
          <div className="absolute inset-0   bg-gradient-to-t from-black/60 via-black/40 to-black/30 flex flex-col items-center justify-center space-y-6 px-4 text-center">
            <p className="text-gray-50 text-3xl font-bold text-opacity-90">Urban Gardening Made Simple</p>
            <button className="bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-green-100 transition">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={s3} alt="Your Green Journey Starts Here" className="w-full h-full object-cover" />
          <div className="absolute inset-0   bg-gradient-to-t from-black/60 via-black/40 to-black/30 flex flex-col items-center justify-center space-y-6 px-4 text-center">
            <p className="text-white text-3xl font-bold">Your Green Journey Starts Here</p>
            <button className="bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-green-100 transition">
              Join Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
