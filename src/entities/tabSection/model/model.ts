// 이미지 지도의 중심좌표
export const center = {
    lat: 37.52906490002707,
    lng: 127.0093900794099
}

// 순차적으로 표시할 마커 위치
export const location = [
    {
        name: '우리 집',
        lat: 37.54149866167363,
        lng: 127.0099800303521
    },
    {
        name: '철수 집',
        lat: 37.53546233929254,
        lng: 126.996831991781
    },
    {
        name: '짱구 집',
        lat: 37.52830826555813,
        lng: 127.00626753186883
    },
    {
        name: '훈이 집',
        lat: 37.52803560792411,
        lng: 127.02441387083671
    },
    {
        name: '회사',
        lat: 37.52484601385873,
        lng: 127.024639085625
    },
    {
        name: '유리 집',
        lat: 37.518448583570986,
        lng: 127.02608488539789
    }
]

// 커스텀 오버레이에 표시할 내용입니다
// HTML 문자열 또는 Dom Element 입니다
export const overlay = (name: string) => `<div class ="speech-bubble">${name}</div>`;

// 커스텀 오버레이가 표시될 위치입니다
// const position = new window.kakao.maps.LatLng(33.450701, 126.570667);
//
// // 커스텀 오버레이를 생성합니다
// const customOverlay = new kakao.maps.CustomOverlay({
//     position: position,
//     content: content
// });
//
// // 커스텀 오버레이를 지도에 표시합니다
// customOverlay.setMap(map);