import React from "react";
import style from './style.module.css'

const colors = [
    '#FF0000', // 빨강
    '#FFA500', // 주황
    '#FFFF00', // 노랑
    '#008000', // 초록
    '#0000FF', // 파랑
    '#4B0082', // 남색
    '#800080'  // 보라색
];
const Card = ({index, reverse}: { index: number, reverse: boolean }) => {
    const backgroundColor = (reverse ? [...colors].reverse() : colors)[index % colors.length];
    return (
        <div className={style.card} style={{backgroundColor}}/>
    )
};

export default Card