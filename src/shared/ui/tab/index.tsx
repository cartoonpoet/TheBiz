import React from "react";
import style from './style.module.css'
import cx from 'classnames'
interface Props {
    name: string
    active?: boolean
    onClick: () => void
}
const Tab = ({name, active, onClick}:Props) => {
    return (
        <div className={cx(style.wrapper, active ? style.active : style.deActive)} onClick={onClick}>{name}</div>
    )
};

export default Tab