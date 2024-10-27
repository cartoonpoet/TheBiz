import React from "react";
import Header from "../../widgets/header/ui";
import style from './style.module.css'
import SearchSection from "../../widgets/searchSection/ui";
import TitleSection from "../../widgets/titleSection/ui";
import MapSection from "../../widgets/mapSection/ui";
import RollingSection from "../../widgets/rollingSection/ui";
import LastSection from "../../widgets/lastSection/ui";
const Home = () => {
    return (
        <div className={style.container}>
            <Header/>
            <SearchSection/>
            <TitleSection/>
            <MapSection/>
            <RollingSection/>
            <LastSection/>
        </div>
    )
};

export default Home
