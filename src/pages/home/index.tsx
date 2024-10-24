import React from "react";
import Header from "../../widgets/header";
import style from './style.module.css'
import SearchSection from "../../widgets/searchSection";

const Home = () => {
    return (
        <div className={style.container}>
            <Header/>
            <SearchSection/>
        </div>
    )
};

export default Home
