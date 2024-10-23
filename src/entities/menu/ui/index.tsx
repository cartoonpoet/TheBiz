import React from "react";
import { MenuType } from '../model/model'
import style from './style.module.css'

const Menu = ({name}: MenuType) => {
    return <a href='#' className={style.menu}>{name}</a>
}

export default Menu;