export const tab = ['Tab1', 'Tab2', 'Tab3']

export const useMoveScroll = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
