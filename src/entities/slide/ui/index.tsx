import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation, Autoplay} from 'swiper/modules';
import React from "react";
import style from './style.module.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import './buttonStyle.css'
import cn from 'classnames'

const Slide = () => {

    return (
        <Swiper
            style={{
                '--swiper-navigation-color': 'black',
            }}
            slidesPerView={3}
            spaceBetween={50}
            autoplay={{delay: 4500, disableOnInteraction: false}}
            loop
            navigation
            modules={[Navigation, Autoplay]}
            className={style.swiper}
        >
            <SwiperSlide className={cn(style.swiperSlide, style.slide1)}>Swiper banner1<br/>무한 롤링 스와이퍼</SwiperSlide>
            <SwiperSlide className={cn(style.swiperSlide, style.slide2)}>Swiper banner2<br/>무한 롤링 스와이퍼</SwiperSlide>
            <SwiperSlide className={cn(style.swiperSlide, style.slide3)}>Swiper banner3<br/>무한 롤링 스와이퍼</SwiperSlide>
            <SwiperSlide className={cn(style.swiperSlide, style.slide4)}>Swiper banner4<br/>무한 롤링 스와이퍼</SwiperSlide>
        </Swiper>

    )
};

export default Slide