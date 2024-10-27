export const tab = ['Tab1', 'Tab2', 'Tab3']

export const useMoveScroll = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤
        block: "start"      // 스크롤 시 시작 지점으로 맞춤
    });
}
