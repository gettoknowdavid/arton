import {useEffect, useState} from 'react';

function useDebounce<T>(value: T, delay: number): T {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // Set a timer to update the debounced value after the specified delay
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function to clear the timeout if the value or delay changes
        // before the timer fires. This is crucial for proper debouncing.
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]); // Only re-run the effect if value or delay changes

    return debouncedValue;
}

export default useDebounce;
