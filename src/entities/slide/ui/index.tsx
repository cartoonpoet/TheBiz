import React, {useRef, useState} from "react";
import style from './style.module.css';
import './buttonStyle.css';
import cn from 'classnames';
import SwiperBtn from 'assets/image/swiper_btn.svg';

const slidePx = 528.75;

const Slide = () => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const [slideArray] = useState(new Array(4).fill(''));
    const [currentSlide, setCurrentSlide] = useState(4);
    const totalSlides = slideArray.length * 3;

    const createSlide = () => {
        return slideArray.map((_, i) => (
            <div key={i} className={cn(style.swiperSlide, style['slide' + (i + 1)])}>
                Swiper banner {i + 1}<br/>무한 롤링 스와이퍼
            </div>
        ));
    };

    const transform = (count: number) => {
        if (swiperRef.current) {
            swiperRef.current.style.transition = 'transform 0.5s ease';
            swiperRef.current.style.transform = `translateX(-${count * slidePx}px)`;

            if (count === totalSlides - slideArray.length) {
                setTimeout(() => {
                    swiperRef.current!.style.transition = 'none';
                    swiperRef.current!.style.transform = `translateX(-${slideArray.length * slidePx}px)`;
                    setCurrentSlide(slideArray.length);
                }, 500);
            }

            if (count === 0) {
                setTimeout(() => {
                    swiperRef.current!.style.transition = 'none';
                    swiperRef.current!.style.transform = `translateX(-${(totalSlides - slideArray.length * 2) * slidePx}px)`;
                    setCurrentSlide(totalSlides - slideArray.length * 2);
                }, 500);
            }
        }
    };

    const handleNext = () => {
        setCurrentSlide(prev => prev + 1);
        transform(currentSlide + 1);
    };

    const handlePrev = () => {
        setCurrentSlide(prev => prev - 1);
        transform(currentSlide - 1);
    };


    return (
        <div className={style.container}>
            <div className={style.leftSwiper}>
                <img src={SwiperBtn} alt="왼쪽" onClick={handlePrev}/>
            </div>
            <div className={style.rightSwiper}>
                <img src={SwiperBtn} alt="오른쪽" onClick={handleNext}/>
            </div>
            <div className={style.wrapper} ref={swiperRef} id="slideContainer">
                {createSlide()}
                {createSlide()}
                {createSlide()}
            </div>
        </div>
    );
};

export default Slide;
