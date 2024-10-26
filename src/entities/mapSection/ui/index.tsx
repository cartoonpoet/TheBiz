import React, {useEffect} from "react";
import style from './style.module.css'
import {center, location, overlay} from '../model/model'
import './overlay.css'

declare global {
    interface Window {
        kakao: any;
    }
}

const MapSection = () => {
    useEffect(() => {
        const mapContainer  = document.getElementById('map'), // 이미지 지도를 표시할 div
            mapOption  = {
                center: new window.kakao.maps.LatLng(center.lat, center.lng),
                level: 6 // 이미지 지도의 확대 레벨
            };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);


        location.forEach(info => {
            const position = new window.kakao.maps.LatLng(info.lat, info.lng);
            const customOverlay = new window.kakao.maps.CustomOverlay({
                position,
                content: overlay(info.name),
                xAnchor: 0.5,
                yAnchor: 0.5
            });
            customOverlay.setMap(map)
        })
    }, []);
    return (
        <div className={style.wrapper}>
            <div className={style.left}>

            </div>
            <div className={style.right}>
                <div id="map" className={style.map}/>
            </div>

        </div>
    )
};

export default MapSection;