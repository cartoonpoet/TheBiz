import {useState, useEffect} from "react";

const addCommasToArray = (digits: string[]) => {
    // 문자열로 결합 후, 3자리마다 콤마를 넣고 다시 배열로 변환
    const numberString = digits.join('');
    const withCommas = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // 콤마가 추가된 문자열을 다시 배열로 변환
    return Array.from(withCommas);
};

const targetNumber = 360000
const end = ['3', '6', '0', '0', '0', '0']
const start = ['0', '0', '0', '0', '0', '0']
const delay = 1000 / 60

const useRollingNum = () => {
    const [digits, setDigits] = useState<string[]>(start); // 초기 숫자 상태
    const [counter, setCounter] = useState<number>(0); // 실행 카운터 상태

    useEffect(() => {
        let rolling = true; // 롤링 중인지 체크
        let maxIndex = digits.length - 1
        let minIndex = digits.length - 1
        const currentDigits = [...digits]; // 현재 숫자 배열 복사

        const interval = setInterval(() => {
            setCounter(prev => prev + 1); // 카운터 증가
            if (rolling) {
                for (let i = maxIndex; i >= minIndex; i--) {
                    currentDigits[i] = String(Math.floor(Math.random() * 10))
                }

                if (currentDigits[maxIndex] === end[maxIndex] && maxIndex >= 1) maxIndex -= 1;
                if (counter % 5 === 0 && minIndex >= 1) minIndex -= 1
                if (Number(currentDigits.join('')) === targetNumber) {
                    rolling = false;
                    clearInterval(interval)
                }
                setDigits(currentDigits)
            }
        }, delay); // 0.1초마다 업데이트

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
    }, []);

    return addCommasToArray(digits)
};

export default useRollingNum