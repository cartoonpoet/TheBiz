import React from "react";
import style from './style.module.css'
import Logo from '../../shared/ui/logo'
import Menu from "../../entities/menu/ui";
import {useHomePageStore} from 'pages/home/model/useHomePageStore'

const Header = () => {
    const {menuList} = useHomePageStore();

    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <Logo/>
                <div className={style.menuList}>{menuList.map((menu, idx) => (
                    <Menu name={menu} key={menu + idx}/>))}</div>
            </div>
            <Menu name={"로그인"}/>
        </div>
    )
}
export default Header;
