import { useState } from 'react'

const useOptions = () => {
    const values = [
        "How does this work",
        "I'm interested in learning more about OpenAI",
        "What is your name",
        "What is your favourite color",
        "Who will win the Stanley Cup this year",
        "Why is the sky blue",
        "What is the best programming language",
        "How does photosynthesis work",
        "How many eggs does a chicken make a day"
    ];

    const getNumRandom = (num, arr) => {
        const shuffled = arr.sort(() => 3.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const changeValues = (used, index) => {
        const existingValues = [...values].filter(val => ![...options].includes(val));
        const newOne = getNumRandom(1, existingValues);
        const newOptions = [...options];
        newOptions[index] = newOne[0]
        setOptions(newOptions);
    }

    const [options, setOptions] = useState(getNumRandom(3, values));

    return [options, changeValues];
}

export { useOptions };