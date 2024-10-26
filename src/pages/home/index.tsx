import React from "react";
import Header from "../../widgets/header";
import style from './style.module.css'
import SearchSection from "../../widgets/searchSection";
import TitleSection from "../../entities/titleSection/ui";
import TabSection from "../../entities/tabSection/ui";

const Home = () => {
    return (
        <div className={style.container}>
            <Header/>
            <SearchSection/>
            <TitleSection/>
            <TabSection/>
        </div>
    )
};

export default Home
