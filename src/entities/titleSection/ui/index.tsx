import React from "react";
import style from './style.module.css'
import NumberBox from "../../../shared/ui/numberBox";
import useRollingNum from '../util/useRollingNum'

const TitleSection = () => {
    const digits = useRollingNum();
    console.log(digits)
    return (
        <div className={style.wrapper}>
            <div className={style.smallTitle}>메인 섹션 2</div>
            <div className={style.mainTitle}>메인 섹션 2 타이틀 영역</div>
            <div className={style.subText}>서브 텍스트</div>
            <div className={style.subText}><span className={style.pointText}>포인트컬러</span> + 텍스트</div>
            <div className={style.describe}>아래 숫자 섹션은 한 칸씩 숫자가 랜덤으로 롤링되며, 최종 숫자는 360,000 입니다.</div>
            <div className={style.count}>
                {digits.map((num, index) => {
                    if(num !== ',')
                        return <NumberBox key={`${num}_${index}`} num={Number(num)} />
                    return num
                })}
                <div>개</div>
            </div>
        </div>
    )
};

export default TitleSection