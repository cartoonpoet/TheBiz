import React from "react";
import style from './style.module.css'
import cx from 'classnames'
interface Props {
    name: string
    active: boolean
    onClick: () => void
    selected: boolean
}
const Tab = ({name, active, onClick, selected}:Props) => {
    return (
        <div className={cx(style.wrapper, selected ? style.selected : style.notSelected, active ? style.active : style.deActive)} onClick={onClick}>{name}</div>
    )
};

export default Tab