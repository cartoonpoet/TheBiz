import React from "react";
import style from './style.module.css'
import Tab from "../tab";


interface Props {
    tab: string[]
    currentTab: number
    scrollToSection: (index: number) => void
}

const TabGroup = ({tab, currentTab, scrollToSection}: Props) => {
    return (
        <div className={style.wrapper}>
            {tab.map((name, idx) => <Tab key={`${name}_${idx}`} name={name} active={currentTab === idx} onClick={() => {
                scrollToSection(idx)
            }}/>)}
        </div>
    )
};

export default TabGroup
