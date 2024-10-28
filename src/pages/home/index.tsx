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
    const scrollToSection = (index: number) => {
        const refs = [mapSectionRef, rollingSectionRef, lastSectionRef]
        refs[index].current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
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
