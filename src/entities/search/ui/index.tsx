import React from "react";
import style from './style.module.css'
import SearchIcon from 'assets/image/icon_search_wh.svg'

const Search = () => {
    return (
        <div className={style.wrapper}>
            <input type="text" placeholder='검색창 placeholder' className={style.inputBox}/>
            <button className={style.searchBtn}>
                <img src={SearchIcon} alt="SearchIcon" className={style.searchIcon}/>검색
            </button>
        </div>
    )
}
export default Search