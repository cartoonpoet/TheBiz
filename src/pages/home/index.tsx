import React from "react";
import Header from "../../widgets/header";
import style from './style.module.css'
import SearchSection from "../../widgets/searchSection";
import TitleSection from "../../entities/title/ui";

const Home = () => {
    return (
        <div className={style.container}>
            <Header/>
            <SearchSection/>
            <TitleSection/>
        </div>
    )
};

export default Home
