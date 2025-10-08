// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import client from '../assets/Services-images/client_1.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import React from 'react'

export default function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="mx-auto relative flex h-[455px] w-[920px] flex-col items-center z-10 justify-center font-jost shadow-2xl">
          <div className="h-[100px] w-[100px]">
            <img src={client} alt="client" />
          </div>
          <p className="mt-6 w-full text-lg italic leading-6 text-[#4b4b4b] sm:w-[75%] md:text-2xl md:leading-10 laptop:text-3xl">
            “If you need any help or assistance we'd be happy to help. Just
            reply to this email. Trusted by Agency proud to work many well known
            brands”
          </p>
          <h4 className="mt-9 flex flex-col text-2xl font-medium text-[#051441]">
            John Gregory
            <span className="mt-2 text-base font-normal text-[#4b4b4b]">
              UI/UX Design
            </span>
          </h4>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-auto flex h-[455px] relative w-[920px] z-10 flex-col items-center justify-center font-jost shadow-2xl">
          <div className="h-[100px] w-[100px]">
            <img src={client} alt="client" />
          </div>
          <p className="mt-6 w-full text-lg italic leading-6 text-[#4b4b4b] sm:w-[75%] md:text-2xl md:leading-10 laptop:text-3xl">
            “If you need any help or assistance we'd be happy to help. Just
            reply to this email. Trusted by Agency proud to work many well known
            brands”
          </p>
          <h4 className="mt-9 flex flex-col text-2xl font-medium text-[#051441]">
            John Gregory
            <span className="mt-2 text-base font-normal text-[#4b4b4b]">
              UI/UX Design
            </span>
          </h4>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-auto flex h-[455px] relative w-[920px] flex-col z-10 items-center justify-center font-jost shadow-2xl">
          <div className="h-[100px] w-[100px]">
            <img src={client} alt="client" />
          </div>
          <p className="mt-6 w-full text-lg italic leading-6 text-[#4b4b4b] sm:w-[75%] md:text-2xl md:leading-10 laptop:text-3xl">
            “If you need any help or assistance we'd be happy to help. Just
            reply to this email. Trusted by Agency proud to work many well known
            brands”
          </p>
          <h4 className="mt-9 flex flex-col text-2xl font-medium text-[#051441]">
            John Gregory
            <span className="mt-2 text-base font-normal text-[#4b4b4b]">
              UI/UX Design
            </span>
          </h4>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
