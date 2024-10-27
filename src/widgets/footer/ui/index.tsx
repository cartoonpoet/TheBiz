import React from "react";
import style from './style.module.css'
import arrow from 'assets/image/icon_arrow_down_bk.svg'
import theBiz from 'assets/image/logo_thebiz.svg'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.title}>공지사항</div>
                <div className={style.subText}>공지사항 타이틀 (공지사항 바로가기)</div>
            </div>
            <hr className={style.line}/>
            <div className={style.middle}>
                <div className={style.title}>고객센터</div>
                <div className={style.subInfo}>
                    <div className={style.phone}>1004-1004</div>
                    <div className={style.businessHour}>운영시간 : <b>09:00 ~ 18:00</b> (주말/공휴일 휴무)</div>
                </div>
                <div className={style.partnerInfo}>
                    <div className={style.title}>사업자 정보</div>
                    <div className={style.detailBox}>
                        <div className={style.detail}>
                            자세히 보기
                            <div><img src={arrow} className={style.arrow} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={style.halfLine}/>
            <div className={style.bottom}>
                <ul className={style.menuGroup}>
                    <li className={style.menu}>서비스 이용약관</li>
                    <li className={style.menu}>개인정보 처리방침</li>
                    <li className={style.menu}>도움말</li>
                    <li className={style.menu}>온라인 문의</li>
                </ul>
                <div className={style.copyRight}>
                    <div>COPYRIGHT 	&#169; 2022 THEBIZ. ALL RIGHTS RESERVED.</div>
                    <div><img src={theBiz} alt='logo'/></div>
                </div>
            </div>
        </div>
    )
};

export default Footer