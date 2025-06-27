import React from 'react';
import { Link } from 'react-router'; // fixed incorrect import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto max-h-[60vh] h-[60vh] rounded-lg overflow-hidden shadow-lg">
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative h-full">
          <img src={s1} alt="Spring Garden Festival" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30 flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-4 text-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Spring Garden Festival</h1>
            <p className="text-white font-medium sm:font-semibold text-base sm:text-lg">Date: May 30, 2025</p>
            <p className="text-white font-medium sm:font-semibold text-base sm:text-lg">Celebrate the blooming season with workshops and plant swaps.</p>
            <Link to="/event-details/0">
              <button className="bg-white text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-green-100 transition">Learn More</button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative h-full">
          <img src={s2} alt="Urban Composting 101" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30 flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-4 text-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Urban Composting 101</h1>
            <p className="text-white font-medium sm:font-semibold text-base sm:text-lg">Date: June 25, 2025</p>
            <p className="text-white font-medium sm:font-semibold text-base sm:text-lg">Hands-on demo on how to compost in small spaces.</p>
            <Link to="/event-details/1">
              <button className="bg-white text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-green-100 transition">See More</button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative h-full">
          <img src={s3} alt="Vertical Gardening Masterclass" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30 flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-4 text-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Vertical Gardening Masterclass</h1>
            <p className="text-white font-medium sm:font-semibold text-base sm:text-lg">Date: July 10, 2025</p>
            <p className="text-white font-medium sm:font-semibold text-base sm:text-lg">Discover techniques to grow trees in compact spaces.</p>
            <Link to="/event-details/2">
              <button className="bg-white text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-green-100 transition">Register Now</button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
