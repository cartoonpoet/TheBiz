import React from "react";
import style from './style.module.css'
import Tab from "../tab";
import {useHomePageStore} from "pages/home/model/useHomePageStore";

interface Props {
    tab: string[]
    currentTab: number
    scrollToSection: (index: number) => void
}

const TabGroup = ({tab, currentTab, scrollToSection}: Props) => {
    const {activeTab} = useHomePageStore();
    return (
        <div className={style.wrapper}>
            {tab.map((name, idx) => <Tab key={`${name}_${idx}`} name={name} selected={currentTab === idx}
                                         active={activeTab.filter(o => idx === o).length > 0} onClick={() => {
                scrollToSection(idx)
            }}/>)}
        </div>
    )
};

export default TabGroup
