import 'swiper/css';
import 'swiper/css/navigation';
import React, {useEffect, useRef, useState} from "react";
import style from './style.module.css';
import './buttonStyle.css';
import cn from 'classnames';
import SwiperBtn from 'assets/image/swiper_btn.svg';

const slidePx = 600;

const text = [

]

const Slide = () => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const [slideArray] = useState(new Array(4).fill('')); // 슬라이드 배열
    const [currentSlide, setCurrentSlide] = useState(0);

    const createSlide = () => {
        return slideArray.map((_, i) => (
            <div key={i} className={cn(style.swiperSlide, style['slide' + (i + 1)])}>
                Swiper banner {i + 1}<br/>무한 롤링 스와이퍼
            </div>
        ));
    };

    const handleNext = () => {
        setCurrentSlide(prev => (prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide(prev => (prev - 1));
    };


    useEffect(() => {
        if (swiperRef.current) {
            if (currentSlide < 0) {

            }
            if (swiperRef.current) {
                swiperRef.current.style.transform = `translateX(-${(currentSlide)*slidePx}px)`
            }
        }
    }, [currentSlide]);

    return (
        <div className={style.container}>
            <div className={style.leftSwiper}>
                <img src={SwiperBtn} alt="왼쪽" onClick={handlePrev}/>
            </div>
            <div className={style.rightSwiper}>
                <img src={SwiperBtn} alt="오른쪽" onClick={handleNext}/>
            </div>
            <div className={style.wrapper} ref={swiperRef}>
                {createSlide()}
                {createSlide()}
                {createSlide()}
            </div>
        </div>
    );
};

export default Slide;
