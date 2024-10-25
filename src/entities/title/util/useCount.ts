import {useEffect, useState} from 'react';


const useCount = (end: number, start = 0, duration = 2000) => {
    const [count, setCount] = useState(start)

    useEffect(() => {
        let currentNum = start;
        const delay = duration / end;
        const countUP = setInterval(()=>{
            currentNum += 1;
            setCount(currentNum);
            if(currentNum === end) clearInterval(countUP)
        }, delay);
    }, [end ,start, duration]);

    return count;
}

export default useCount;