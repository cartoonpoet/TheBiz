import React from "react";
import style from './style.module.css'
import Tab from "../tab";
interface Props {
    tab: string[]
    currentTab: number
}
const TabGroup = ({tab, currentTab}:Props) => {
    return (
        <div className={style.wrapper}>
            {tab.map((name, idx) => <Tab key={`${name}_${idx}`} name={name} active={currentTab === idx}/>)}
        </div>
    )
};

export default TabGroup
