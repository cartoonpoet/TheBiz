import React from "react";
import style from './style.module.css'
import Card from "../../../shared/ui/card";
import cx from 'classnames'

const cardCount = 7;
const InfinityRolling = () => {
    const cards = new Array(cardCount).fill('')

    return (
        <div className={style.wrapper}>
            <div className={style.up}>
                <div className={style.boxes}>
                    {cards.map((card, i) => <Card index={i} key={i} reverse={false}/>)}
                </div>
                <div className={cx(style.boxes, style.list2)}>
                    {cards.map((card, i) => <Card index={i} key={i} reverse={false}/>)}
                </div>
            </div>
            <div className={style.down}>
                <div className={style.boxes}>
                    {cards.map((card, i) => <Card index={i} key={i} reverse/>)}
                </div>
                <div className={cx(style.boxes, style.list2)}>
                    {cards.map((card, i) => <Card index={i} key={i} reverse/>)}
                </div>
            </div>
        </div>
    )
}

export default InfinityRolling