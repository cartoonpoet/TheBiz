import React, {useRef, useEffect} from "react";
import Header from "../../widgets/header/ui";
import style from './style.module.css'
import SearchSection from "../../widgets/searchSection/ui";
import TitleSection from "../../widgets/titleSection/ui";
import MapSection from "../../widgets/mapSection/ui";
import RollingSection from "../../widgets/rollingSection/ui";
import LastSection from "../../widgets/lastSection/ui";
import Footer from '../../widgets/footer/ui'


const Home = () => {
    const mapSectionRef = useRef<HTMLDivElement>(null)
    const rollingSectionRef = useRef<HTMLDivElement>(null)
    const lastSectionRef = useRef<HTMLDivElement>(null)
    const scrollToSection = (index: number) => {
        const refs = [mapSectionRef, rollingSectionRef, lastSectionRef]
        refs[index].current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // onVisible(); // 카드가 보일 때 이벤트 호출
                }
            },
            {
                root: null, // 뷰포트
                threshold: 0, // 카드의 상단이 뷰포트에 닿으면
            }
        );

        if (mapSectionRef.current) {
            observer.observe(mapSectionRef.current); // 카드 요소 관찰 시작
        }

        return () => {
            if (mapSectionRef.current) {
                observer.unobserve(mapSectionRef.current); // 언마운트 시 관찰 중지
            }
        };
    }, []);

    return (
        <div className={style.container}>
            <Header/>
            <SearchSection/>
            <TitleSection/>
            <MapSection ref={mapSectionRef} scrollToSection={scrollToSection}/>
            <RollingSection ref={rollingSectionRef} scrollToSection={scrollToSection}/>
            <LastSection ref={lastSectionRef} scrollToSection={scrollToSection}/>
            <Footer/>
        </div>
    )
};

export default Home
