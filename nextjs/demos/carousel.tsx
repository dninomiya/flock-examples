import React from 'react';
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = () => {
  const items = new Array(10).fill(null);

  return (
    <div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={{
            nextEl: '#next',
            prevEl: '#prev',
          }}
          pagination={{
            clickable: true,
            bulletClass:
              'w-2.5 h-2.5 bg-gray-200 block rounded-full cursor-pointer',
            bulletActiveClass: 'bg-pink-400',
            el: '#pagination',
          }}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides
          loop
        >
          {items.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-md bg-white shadow aspect-video"></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          id="prev"
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-gray-400"
        >
          <HiOutlineChevronLeft className="text-6xl" />
        </button>
        <button
          id="next"
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-gray-400"
        >
          <HiOutlineChevronRight className="text-6xl" />
        </button>
      </div>
      <div
        id="pagination"
        className="flex items-center space-x-2 justify-center mt-4"
      ></div>
    </div>
  );
};

export default Carousel;
