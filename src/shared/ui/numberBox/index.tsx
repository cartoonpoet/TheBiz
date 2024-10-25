import React from "react";
import style from './style.module.css'
interface Props {
    num: number
}

const NumberBox = ({num}: Props) => (<span className={style.wrapper}>{num}</span>)


export default NumberBox;