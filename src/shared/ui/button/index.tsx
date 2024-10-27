import React, {CSSProperties} from "react";
import style from './style.module.css'

interface Props {
    disabled: boolean
    children: React.ReactNode
    inlineStyle?: CSSProperties
}
const Button = ({disabled, children, inlineStyle}: Props) => {
    return <button disabled={disabled} className={style.button} style={inlineStyle}>{children}</button>
};

export default Button