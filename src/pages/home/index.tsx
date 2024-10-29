import React, {useRef} from "react";
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
    const headerHeight = 60; // 헤더 높이 설정 (px)

    const scrollToSection = (index: number) => {
        const refs = [mapSectionRef, rollingSectionRef, lastSectionRef];
        const targetRef = refs[index].current;

        if (targetRef) {
            const targetPosition = targetRef.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    };

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
