import React from "react"
import style from './style.module.css'
import TabGroup from "../../../shared/ui/tabGroup";
import {tab} from "../../../shared/model/tab";
import Button from "../../../shared/ui/button";

const LastSection = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.tab}><TabGroup tab={tab} currentTab={2}/></div>
            <div className={style.title}>메인 섹션3 - Tab3</div>
            <div className={style.describe}>섹션3 내 tab 버튼 클릭 시 해당 섹션으로 이동시켜주세요.</div>
            <div className={style.describe}>또한, 스크롤에 따라 탭의 Active 상태를 바꿔주세요.</div>
            <div className={style.btn}><Button disabled={false}>button</Button></div>
        </div>
    )
};

export default LastSection