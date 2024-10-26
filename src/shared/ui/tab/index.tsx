import React from "react";
import style from './style.module.css'
import cx from 'classnames'
interface Props {
    name: string
    active?: boolean
}
const Tab = ({name, active}:Props) => {
    return (
        <div className={cx(style.wrapper, active ? style.active : style.deActive)}>{name}</div>
    )
};

export default Tab