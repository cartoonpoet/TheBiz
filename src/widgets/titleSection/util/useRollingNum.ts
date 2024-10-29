import {useState, useEffect} from "react";

const addCommasToArray = (digits: string[]) => {
    const numberString = digits.join('');
    const withCommas = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return Array.from(withCommas);
};

const targetNumber = 360000
const end = ['3', '6', '0', '0', '0', '0']
const start = ['0', '0', '0', '0', '0', '0']
const delay = 1000 / 60

const useRollingNum = () => {
    const [digits, setDigits] = useState<string[]>(start);
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        let rolling = true;
        let maxIndex = digits.length - 1
        let minIndex = digits.length - 1
        const currentDigits = [...digits];

        const interval = setInterval(() => {
            setCounter(prev => prev + 1);
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
        }, delay);

        return () => clearInterval(interval);
    }, []);

    return addCommasToArray(digits)
};

export default useRollingNum