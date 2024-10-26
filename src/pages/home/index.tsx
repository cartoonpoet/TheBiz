import React from "react";
import Header from "../../widgets/header";
import style from './style.module.css'
import SearchSection from "../../widgets/searchSection";
import TitleSection from "../../entities/titleSection/ui";
import MapSection from "../../entities/mapSection/ui";

const Home = () => {
    return (
        <div className={style.container}>
            <Header/>
            <SearchSection/>
            <TitleSection/>
            <MapSection/>
        </div>
    )
};

export default Home
