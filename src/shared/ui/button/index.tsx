import React from "react";
import style from './style.module.css'

interface Props {
    disabled: boolean
    children: React.ReactNode
}
const Button = ({disabled, children}: Props) => {
    return <button disabled={disabled} className={style.button}>{children}</button>
};

export default Button