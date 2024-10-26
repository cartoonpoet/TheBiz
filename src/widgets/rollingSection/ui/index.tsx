import React from "react";
import style from './style.module.css'
import TabGroup from "../../../shared/ui/tabGroup";
import {tab} from "../../../shared/model/tab";
import InfinityRolling from "../../../entities/infinityRolling/ui";

const RollingSection = () => {
    return (
        <ul className={style.wrapper}>
            <li className={style.left}>
                <div className={style.box}>
                    <div className={style.tab}><TabGroup tab={tab} currentTab={1}/></div>
                    <div className={style.title}>메인 섹션3 - Tab 2</div>
                    <div className={style.describe}>우측 컨텐츠는 무한 롤링 배너 입니다.</div>
                    <div className={style.describe}>1열은 위로, 2열은 아래로 흐르게 해주세요.</div>
                    <div className={style.describe}>배너 사이즈: 360*600</div>
                </div>
            </li>
            <li className={style.right}>
                <InfinityRolling/>
            </li>
        </ul>
    )
};

export default RollingSection