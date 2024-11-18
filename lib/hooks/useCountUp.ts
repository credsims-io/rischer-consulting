import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

export function useCountUp(end: number, duration: number = 2) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, end, {
            duration,
            onUpdate: (value) => {
                setCount(value);
            },
            ease: "easeOut",
        });

        return () => controls.stop();
    }, [end, duration]);

    // Format the number with commas and 2 decimal places
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(count);
}