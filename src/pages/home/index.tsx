import React, {useRef, useEffect} from "react";
import Header from "../../widgets/header/ui";
import style from './style.module.css'
import SearchSection from "../../widgets/searchSection/ui";
import TitleSection from "../../widgets/titleSection/ui";
import MapSection from "../../widgets/mapSection/ui";
import RollingSection from "../../widgets/rollingSection/ui";
import LastSection from "../../widgets/lastSection/ui";
import Footer from '../../widgets/footer/ui'
import {useHomePageStore} from "pages/home/model/useHomePageStore";


const Home = () => {
    const mapSectionRef = useRef<HTMLDivElement>(null)
    const rollingSectionRef = useRef<HTMLDivElement>(null)
    const lastSectionRef = useRef<HTMLDivElement>(null)
    const headerHeight = 60;
    const {setActiveTab, activeTab} = useHomePageStore();

    const scrollToSection = (index: number) => {
        const refs = [mapSectionRef, rollingSectionRef, lastSectionRef];
        const targetRef = refs[index].current;

        if (targetRef) {
            targetRef.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    };

    useEffect(() => {
        const sectionRefs = [mapSectionRef.current, rollingSectionRef.current, lastSectionRef.current];
        const observerOptions = {
            root: null,
            rootMargin: `-${headerHeight}px 0px`,
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            const newActiveTabs = new Set(activeTab);
            entries.forEach(entry => {
                const index = sectionRefs.indexOf(entry.target as HTMLDivElement);
                if (entry.isIntersecting) {
                    newActiveTabs.add(index);
                } else {
                    newActiveTabs.delete(index);
                }
            });
            setActiveTab([...newActiveTabs]);
        }, observerOptions);

        sectionRefs.forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            sectionRefs.forEach(ref => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, [activeTab]);

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
