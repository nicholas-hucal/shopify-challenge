import { useState, useEffect } from 'react'

const getLocaleStorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    const start = JSON.parse(stored);
    return start || defaultValue;
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => getLocaleStorage(key, defaultValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export {useLocalStorage, setLocalStorage}