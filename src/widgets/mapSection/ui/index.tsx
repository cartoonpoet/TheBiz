import React, {useEffect, useRef,  forwardRef} from "react";
import style from './style.module.css'
import {center, location, overlay} from '../model/model'
import './overlay.css'
import Button from "../../../shared/ui/button";
import TabGroup from '../../../shared/ui/tabGroup'
import {tab} from "../../../shared/model/tab";

declare global {
    interface Window {
        kakao: any;
    }
}

interface Props {
    scrollToSection: (index: number) => void
}

const MapSection = forwardRef<HTMLDivElement, Props>(({scrollToSection}: Props, ref) => {
    const overlayRef = useRef<any[]>([])

    useEffect(() => {
        const mapContainer = document.getElementById('map'),
            mapOption = {
                center: new window.kakao.maps.LatLng(center.lat, center.lng),
                level: 6,
                draggable: false
            };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const showMarkersSequentially = () => {
            location.forEach((info, index) => {
                setTimeout(() => {
                    const position = new window.kakao.maps.LatLng(info.lat, info.lng);
                    const newCustomOverlay = new window.kakao.maps.CustomOverlay({
                        position,
                        content: overlay(info.name),
                        xAnchor: 0.5,
                        yAnchor: 0.5
                    });
                    newCustomOverlay.setMap(map)
                    overlayRef.current.push(newCustomOverlay)
                }, index * 1000);

            })

        };

        const scrollEventListener = () => {
            const section = document.querySelector('#mapSection')!.getBoundingClientRect();
            const { top } = section;

            if (Math.abs(top - 60) <= 30 && Math.abs(top - 60) >= 0) {
                if (overlayRef.current.length === 0 ) showMarkersSequentially();
            }
        };
        window.addEventListener('scroll', scrollEventListener)
        if (overlayRef.current.length === location.length) window.removeEventListener('scroll', scrollEventListener)
    }, []);
    return (
        <div className={style.wrapper} ref={ref} id={"mapSection"}>
            <div className={style.left}>
                <ul className={style.box}>
                    <li className={style.tab}>
                        <TabGroup tab={tab} currentTab={0} scrollToSection={scrollToSection}/>
                    </li>
                    <li className={style.title}>메인 섹션3 - Tab1</li>
                    <li className={style.describe}>스크롤이 섹션 상단에 닿았을 때</li>
                    <li className={style.describe}>우측 이미지 지도 위 마커들이</li>
                    <li className={style.describe}>순차적으로 노출되도록 구현하세요.</li>
                    <li className={style.btnGroup}>
                        <Button disabled={false}>button</Button>
                    </li>
                </ul>
            </div>
            <div className={style.right}>
                <div id="map" className={style.map}/>
            </div>

        </div>
    )
});

MapSection.displayName = 'MapSection'
export default MapSection;