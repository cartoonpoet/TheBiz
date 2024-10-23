import React from "react";
import style from './header.module.css'
import Logo from '../../shared/ui/logo'
import Menu from "../../entities/menu/ui";

const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <Logo/>
                <div className={style.menuList}></div>
            </div>
            <Menu name={"로그인"}/>
        </div>
    )
}
export default Header;
