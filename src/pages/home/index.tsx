import React, {useRef } from "react";
import Header from "../../widgets/header/ui";
import style from './style.module.css'
import SearchSection from "../../widgets/searchSection/ui";
import TitleSection from "../../widgets/titleSection/ui";
import MapSection from "../../widgets/mapSection/ui";
import RollingSection from "../../widgets/rollingSection/ui";
import LastSection from "../../widgets/lastSection/ui";
import Footer from '../../widgets/footer/ui'


const Home = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToSection = (index: number) => {
        sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className={style.container}>
            <Header/>
            <SearchSection/>
            <TitleSection/>
            <MapSection sectionRefs={(el) => (sectionRefs.current[0] = el)} scrollToSection={scrollToSection}/>
            <RollingSection sectionRefs={(el) => (sectionRefs.current[1] = el)} scrollToSection={scrollToSection}/>
            <LastSection sectionRefs={(el) => (sectionRefs.current[2] = el)} scrollToSection={scrollToSection}/>
            <Footer/>
        </div>
    )
};

export default Home
