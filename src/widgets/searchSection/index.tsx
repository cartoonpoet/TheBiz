import React from "react";
import style from './style.module.css'
import Search from "../../entities/search/ui";
import Slide from "../../entities/slide/ui";
const SearchSection = () => {
    return (
        <div className={style.container}>
            <div className={style.subTitle}>AI실장</div>
            <div className={style.title}>나에게 필요한 부동산 정보를 검색해보세요.</div>
            <Search/>
            <Slide/>
        </div>
    )
};

export default SearchSection